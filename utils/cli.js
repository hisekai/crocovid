const meow = require("meow");
const helpText = require("./help/helpText");

const options = {
	flags: {
		counties: {
			type: "boolean",
			default: false,
			alias: "c"
		},
		detail: {
			type: "boolean",
			default: false,
			alias: "d"
		},
		sort: {
			type: "boolean",
			default: false,
			alias: "s"
		},
		world: {
			type: "boolean",
			default: false,
			alias: "w"
		},
		english: {
			type: "boolean",
			default: false,
			alias: "e"
		},
		help: {
			type: "boolean",
			default: false,
			alias: "h"
		},
		version: {
			type: "boolean",
			default: false,
			alias: "v"
		}
	},
	description: false
};

module.exports = meow(helpText, options);
