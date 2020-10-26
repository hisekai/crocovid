const fetch = require("node-fetch");
const recentStats = require("./stats/last");
const byCountiesStats = require("./stats/byCounties");

module.exports = async (flags, input) => {
	const param = flags.counties ? "po_danima_zupanijama_zadnji" : "podaci";
	const url = `https://www.koronavirus.hr/json/?action=${param}`;
	try {
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			flags.counties
				? await byCountiesStats(data, flags, input)
				: await recentStats(data, flags);
			console.log("\n");
		} else {
			flags.english
				? console.log("Couldn't fetch data.")
				: console.log("Nije bilo moguće doći do podataka.");
		}
	} catch (err) {
		flags.english
			? console.log("Sorry, something went wrong.")
			: console.log("Nesto je pošlo po krivu, sorry.");
	}
};
