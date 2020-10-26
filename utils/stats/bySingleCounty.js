const { bold } = require("chalk");
const Table = require("cli-table3");
const fetch = require("node-fetch");
const prompt = require("./../prompts/county");

module.exports = async flags => {
	// table
	const numFormat = flags.english ? "en-US" : "de-DE";
	const tableHead = flags.english
		? ["Date", "Cases", "Active", "Deaths"]
		: ["Datum", "Zaraženi", "Aktivni", "Preminuli"];
	const table = new Table({
		head: tableHead
	});
	// prompt
	const county = await prompt.run();
	let num = 10; // print number of days
	const url = `https://www.koronavirus.hr/json/?action=po_danima_zupanijama`;
	try {
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			let countyData = []; // push the data in here
			for (let i = 0; i < num; i++) {
				let datum = new Date(data[i].Datum)
					.toLocaleString(numFormat)
					.slice(0, -10)
					.replace(",", "");
				let stats = data[i].PodaciDetaljno;
				stats.filter(el => {
					el.Zupanija === county && countyData.push({ datum, el });
				});
			}
			countyData.forEach(day => {
				table.push([
					day.datum,
					day.el.broj_zarazenih.toLocaleString(numFormat),
					day.el.broj_aktivni.toLocaleString(numFormat),
					day.el.broj_umrlih.toLocaleString(numFormat)
				]);
			});
			console.log(table.toString());
			console.log("\n");
		} else {
			flags.english
				? console.log("Couldn't fetch data.")
				: console.log("Nije bilo moguće doći do podataka");
		}
	} catch (err) {
		flags.english
			? console.log("Sorry, something went wrong.")
			: console.log("Nesto je pošlo po krivu, sorry.");
	}
};
