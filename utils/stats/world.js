const fetch = require("node-fetch");
const { bold } = require("chalk");
const Table = require("cli-table3");

module.exports = async flags => {
	// table
	const numFormat = flags.english ? "en-US" : "de-DE";
	const tableHead = flags.english
		? ["Date", "Cases", "Recovered", "Deaths"]
		: ["Datum", "Slučajevi", "Oporavljeni", "Preminuli"];
	const table = new Table({
		head: tableHead
	});

	let num = 10; // print number of days
	const url = `https://www.koronavirus.hr/json/?action=podaci`;
	const prefix1 = flags.english ? "Croatia" : "HR";
	const prefix2 = flags.english ? "World" : "Svijet";
	try {
		const res = await fetch(url);
		if (res.ok) {
			const data = await res.json();
			for (let i = 0; i < num; i++) {
				table.push([
					new Date(data[i].Datum).toLocaleDateString(numFormat),
					`${prefix1}: ${bold(
						data[i].SlucajeviHrvatska.toLocaleString(numFormat)
					)} \n${prefix2}: ${bold(
						data[i].SlucajeviSvijet.toLocaleString(numFormat)
					)}`,
					`${prefix1}: ${bold(
						data[i].IzlijeceniHrvatska.toLocaleString(numFormat)
					)} \n${prefix2}: ${bold(
						data[i].IzlijeceniSvijet.toLocaleString(numFormat)
					)}`,
					`${prefix1}: ${bold(
						data[i].UmrliHrvatska.toLocaleString(numFormat)
					)} \n${prefix2}: ${bold(
						data[i].UmrliSvijet.toLocaleString(numFormat)
					)}`
				]);
			}
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
