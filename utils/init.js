const welcome = require("cli-welcome");
const pkgJSON = require("./../package.json");
const { dim } = require("chalk");

module.exports = async english => {
	welcome({
		title: "crocovid",
		description: english
			? "\nCOVID-19 stats for Croatia"
			: dim("\nCOVID-19 statistika za Hrvatsku"),
		bgColor: "#033e7c",
		version: pkgJSON.version,
		clear: true
	});
};
