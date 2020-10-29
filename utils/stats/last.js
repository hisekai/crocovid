const { bold } = require("chalk");
const Table = require("cli-table3");
const formatDate = require("./../format/formatDate");
const formatNumbers = require("./../format/formatNumbers");

module.exports = async (data, flags) => {
	const cases = data[0];
	const prevCases = data[1];
	const date = cases.Datum;
	const dateFormatted = formatDate(date, flags.english, true);
	const croatiaCases = formatNumbers(cases.SlucajeviHrvatska, flags.english);
	const worldCases = formatNumbers(cases.SlucajeviSvijet, flags.english);
	const newCroatiaCases = formatNumbers(
		cases.SlucajeviHrvatska - prevCases.SlucajeviHrvatska,
		flags.english
	);
	const newWorldCases = formatNumbers(
		cases.SlucajeviSvijet - prevCases.SlucajeviSvijet,
		flags.english
	);
	const croatiaRecoveredCases = formatNumbers(
		cases.IzlijeceniHrvatska,
		flags.english
	);
	const worldRecoveredCases = formatNumbers(
		cases.IzlijeceniSvijet,
		flags.english
	);
	const croatiaDeathCases = formatNumbers(cases.UmrliHrvatska, flags.english);
	const worldDeathCases = formatNumbers(cases.UmrliSvijet, flags.english);
	const prefix1 = flags.english ? "Croatia" : "HR";
	const prefix2 = flags.english ? "World" : "Svijet";
	const tableHead = flags.english
		? ["", "Cases", "Recovered", "Deaths", "Today"]
		: [" ", "Slučajevi", "Oporavljeni", "Preminuli", "Danas"];
	const table = new Table({
		head: tableHead
	});
	table.push(
		[
			prefix1,
			`${bold(croatiaCases)}`,
			`${bold(croatiaRecoveredCases)}`,
			`${bold(croatiaDeathCases)}`,
			`+${bold(newCroatiaCases)}`
		],
		[
			prefix2,
			`${bold(worldCases)}`,
			`${bold(worldRecoveredCases)}`,
			`${bold(worldDeathCases)}`,
			`+${bold(newWorldCases)}`
		]
	);
	flags.english
		? console.log(` Updated: ${dateFormatted}`)
		: console.log(` Ažurirano: ${dateFormatted}`);
	console.log(table.toString());
};
