import DomAccessHelper from "./dom-access-helper.js";
import HttpClient from "./http-client.js";
import MigratePluginManager from "./plugin-manager.js";
import QueryString from "./query-string.js";

export default {
	plugins: {
		"onlishop-storefront": {
			rules: {
				"migrate-plugin-manager": MigratePluginManager,
				"no-dom-access-helper": DomAccessHelper,
				"no-http-client": HttpClient,
				"no-query-string": QueryString,
			},
		},
	},
	rules: {
		"onlishop-storefront/migrate-plugin-manager": "error",
		"onlishop-storefront/no-dom-access-helper": "warn",
		"onlishop-storefront/no-http-client": "warn",
		"onlishop-storefront/no-query-string": "warn",
	},
};
