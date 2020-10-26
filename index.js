#!/usr/bin/env node
const init = require("./utils/init");
const stats = require("./utils/stats");
const statsSingle = require("./utils/stats/bySingleCounty");
const statsWorld = require("./utils/stats/world");
const footer = require("./utils/footer");
const cli = require("./utils/cli");
const input = cli.input;
const flags = cli.flags;

(async () => {
	// init, print basic info
	init(flags.english);
	// Print help
	input.includes("help") && cli.showHelp(0);
	// print data from the koronavirus.hr API for all counties
	!flags.detail && !flags.help && !flags.world && (await stats(flags, input));
	// print data for a single county and trigger a prompt
	flags.detail && (await statsSingle(flags));
	// print data to have an overview of the world and Croatia
	flags.world && (await statsWorld(flags));
	// print the source of data
	await footer(flags.english);
})();
