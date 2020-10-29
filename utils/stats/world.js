const { bold } = require("chalk");
const Table = require("cli-table3");
const { getData } = require("./../api");
const formatDate = require("./../format/formatDate");
const formatNumbers = require("./../format/formatNumbers");

module.exports = async flags => {
	// table
	const tableHead = flags.english
		? ["Date", "Cases", "Recovered", "Deaths"]
		: ["Datum", "Slučajevi", "Oporavljeni", "Preminuli"];
	const table = new Table({
		head: tableHead
	});

	let num = 10; // print number of days
	const prefix1 = flags.english ? "Croatia" : "HR";
	const prefix2 = flags.english ? "World" : "Svijet";
	const data = await getData(); // fetch data
	// push the relevant data into the table
	for (let i = 0; i < num; i++) {
		table.push([
			formatDate(data[i].Datum, flags.english, false),
			`${prefix1}: ${bold(
				formatNumbers(data[i].SlucajeviHrvatska, flags.english)
			)} \n${prefix2}: ${bold(
				formatNumbers(data[i].SlucajeviSvijet, flags.english)
			)}`,
			`${prefix1}: ${bold(
				formatNumbers(data[i].IzlijeceniHrvatska, flags.english)
			)} \n${prefix2}: ${bold(
				formatNumbers(data[i].IzlijeceniSvijet, flags.english)
			)}`,
			`${prefix1}: ${bold(
				formatNumbers(data[i].UmrliHrvatska, flags.english)
			)} \n${prefix2}: ${bold(
				formatNumbers(data[i].UmrliSvijet, flags.english)
			)}`
		]);
	}
	console.log(table.toString());
};
