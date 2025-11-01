import { RuleTester } from "eslint";
import { describe, it } from "vitest";
import rule from "../no-sw-extension-override";

describe("no-sw-extension-override", () => {
	const ruleTester = new RuleTester({
		languageOptions: { ecmaVersion: 2015, sourceType: "module" },
	});

	it("should be a valid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [
				{
					code: `Onlishop.Component.override('sw-foo', {})`,
				},
				{
					code: `Onlishop.Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const { Component } = Onlishop; Component.extend('sw-extension-foo', {})`,
				},
				{
					code: `const Component = Onlishop.Component; Component.extend('sw-extension-foo', {})`,
				},
			],
			invalid: [],
		});
	});

	it("should be an invalid override", () => {
		ruleTester.run("no-sw-extension-override", rule, {
			valid: [],
			invalid: [
				{
					code: `Onlishop.Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Onlishop Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const { Component } = Onlishop; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Onlishop Extension Manager is not allowed",
						},
					],
				},
				{
					code: `const Component = Onlishop.Component; Component.override('sw-extension-foo', {})`,
					errors: [
						{
							message: "Changing the Onlishop Extension Manager is not allowed",
						},
					],
				},
			],
		});
	});
});
