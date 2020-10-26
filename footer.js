const { italic } = require("chalk");

module.exports = async english => {
	english
		? console.log(italic(`Data source: koronavirus.hr`))
		: console.log(italic(`Izvor podataka: koronavirus.hr`));
	console.log("\n");
};
