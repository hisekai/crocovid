const { bold } = require("chalk");
const Table = require("cli-table3");

module.exports = async (data, flags) => {
	const cases = data[0];
	const prevCases = data[1];
	const numFormat = flags.english ? "de-DE" : "hr-HR";
	const date = cases.Datum;
	let dateFormatted = date.split(" ");
	dateFormatted = `${new Date(dateFormatted[0])
		.toLocaleDateString(numFormat)
		.replace(" ", "")
		.split(" ")
		.join("")
		.slice(0, -1)} ${dateFormatted[1]}`;
	const croatiaCases = cases.SlucajeviHrvatska.toLocaleString(numFormat);
	const worldCases = cases.SlucajeviSvijet.toLocaleString(numFormat);
	const newCroatiaCases = (
		cases.SlucajeviHrvatska - prevCases.SlucajeviHrvatska
	).toLocaleString(numFormat);
	const newWorldCases = (
		cases.SlucajeviSvijet - prevCases.SlucajeviSvijet
	).toLocaleString(numFormat);
	const croatiaRecoveredCases = cases.IzlijeceniHrvatska.toLocaleString(
		numFormat
	);
	const worldRecoveredCases = cases.IzlijeceniSvijet.toLocaleString(
		numFormat
	);
	const croatiaDeathCases = cases.UmrliHrvatska.toLocaleString(numFormat);
	const worldDeathCases = cases.UmrliSvijet.toLocaleString(numFormat);
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
