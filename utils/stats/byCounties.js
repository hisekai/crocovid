const { bold } = require("chalk");
const Table = require("cli-table3");
const sortBy = require("./../sortBy");
const formatDate = require("./../format/formatDate");
const formatNumbers = require("./../format/formatNumbers");

module.exports = async (data, flags, input) => {
	const date = data.Datum;
	let counties = data.PodaciDetaljno;
	let sortedCounties = flags.sort && (await sortBy(counties, input));
	let dateFormatted = formatDate(date, flags.english, true);
	const tableHead = flags.english
		? ["Counties", "Cases", "Active", "Deaths"]
		: ["Županije", "Zaraženi", "Aktivni", "Preminuli"];
	const table = new Table({ head: tableHead });
	const tableTemplate = county =>
		table.push([
			county.Zupanija,
			formatNumbers(county.broj_zarazenih, flags.english),
			formatNumbers(county.broj_aktivni, flags.english),
			formatNumbers(county.broj_umrlih, flags.english)
		]);
	flags.sort
		? sortedCounties.forEach(county => tableTemplate(county))
		: counties.forEach(county => tableTemplate(county));
	flags.english
		? console.log(` Updated: ${dateFormatted}`)
		: console.log(` Ažurirano: ${dateFormatted}`);
	console.log(table.toString());
};
