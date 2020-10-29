const { bold } = require("chalk");
const Table = require("cli-table3");
const prompt = require("./../prompts/county");
const { getDataByCounties } = require("./../api");
const formatDate = require("./../format/formatDate");
const formatNumbers = require("./../format/formatNumbers");

module.exports = async flags => {
	// table
	const tableHead = flags.english
		? ["Date", "Cases", "Active", "Deaths"]
		: ["Datum", "Zaraženi", "Aktivni", "Preminuli"];
	const table = new Table({
		head: tableHead
	});
	// prompt
	const county = await prompt.run();
	let num = 10; // print number of days
	const data = await getDataByCounties(); // fetch the relevant data
	let countyData = []; // push the data in here
	for (let i = 0; i < num; i++) {
		let datum = formatDate(data[i].Datum, flags.english, false);
		let stats = data[i].PodaciDetaljno;
		stats.filter(el => {
			el.Zupanija === county && countyData.push({ datum, el });
		});
	}
	countyData.forEach(day => {
		table.push([
			day.datum,
			formatNumbers(day.el.broj_zarazenih, flags.english),
			formatNumbers(day.el.broj_aktivni, flags.english),
			formatNumbers(day.el.broj_umrlih, flags.english)
		]);
	});
	console.log(table.toString());
};
