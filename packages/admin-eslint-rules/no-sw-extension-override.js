export default {
	meta: {
		type: "problem",
		docs: {
			description:
				"Disallow overwriting sw-extension-* components using Onlishop.Component.override",
			category: "Possible Errors",
			recommended: true,
		},
		fixable: null,
		schema: [],
	},

	create(context) {
		let componentVariableName = null;

		return {
			VariableDeclarator(node) {
				// const { Component } = Onlishop;
				if (
					node.id.type === "ObjectPattern" &&
					node.init &&
					node.init.type === "Identifier" &&
					node.init.name === "Onlishop"
				) {
					const componentProperty = node.id.properties.find(
						(p) => p.key.name === "Component",
					);
					if (componentProperty) {
						componentVariableName = componentProperty.value.name;
					}
				}

				// const Component = Onlishop.Component;
				if (
					node.id.type === "Identifier" &&
					node.init &&
					node.init.type === "MemberExpression" &&
					node.init.object.type === "Identifier" &&
					node.init.object.name === "Onlishop" &&
					node.init.property.type === "Identifier" &&
					node.init.property.name === "Component"
				) {
					componentVariableName = node.id.name;
				}
			},
			CallExpression(node) {
				const isOnlishopComponentOverride =
					node.callee.type === "MemberExpression" &&
					node.callee.object.type === "MemberExpression" &&
					node.callee.object.object.type === "Identifier" &&
					node.callee.object.object.name === "Onlishop" &&
					node.callee.object.property.type === "Identifier" &&
					node.callee.object.property.name === "Component" &&
					node.callee.property.type === "Identifier" &&
					node.callee.property.name === "override";

				const isAliasOverride =
					componentVariableName &&
					node.callee.type === "MemberExpression" &&
					node.callee.object.type === "Identifier" &&
					node.callee.object.name === componentVariableName &&
					node.callee.property.type === "Identifier" &&
					node.callee.property.name === "override";

				if (isOnlishopComponentOverride || isAliasOverride) {
					const firstArg = node.arguments[0];
					if (
						firstArg &&
						firstArg.type === "Literal" &&
						typeof firstArg.value === "string" &&
						firstArg.value.startsWith("sw-extension-")
					) {
						context.report({
							node,
							message: "Changing the Onlishop Extension Manager is not allowed",
						});
					}
				}
			},
		};
	},
};
