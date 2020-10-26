const { bold } = require("chalk");
const Table = require("cli-table3");
const ora = require("ora");
const sortBy = require("./../sortBy");

const spinner = ora({ text: "" });

module.exports = async (data, flags, input) => {
	const date = data[0].Datum;
	let counties = data[0].PodaciDetaljno;
	let sortedCounties = flags.sort && (await sortBy(counties, input));
	const numFormat = flags.english ? "en-US" : "de-DE";
	let dateFormatted = new Date(date).toLocaleString(numFormat);
	const tableHead = flags.english
		? ["Counties", "Cases", "Active", "Deaths"]
		: ["Županije", "Zaraženi", "Aktivni", "Preminuli"];
	const table = new Table({ head: tableHead });
	const tableTemplate = county =>
		table.push([
			county.Zupanija,
			county.broj_zarazenih.toLocaleString(numFormat),
			county.broj_aktivni.toLocaleString(numFormat),
			county.broj_umrlih.toLocaleString(numFormat)
		]);
	spinner.start();
	flags.sort
		? sortedCounties.forEach(county => tableTemplate(county))
		: counties.forEach(county => tableTemplate(county));
	spinner.stop();
	flags.english
		? console.log(` Updated: ${dateFormatted}`)
		: console.log(` Ažurirano: ${dateFormatted}`);
	console.log(table.toString());
};
