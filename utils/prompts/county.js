const { AutoComplete } = require("enquirer");

const prompt = new AutoComplete({
	name: "county",
	message: "Odaberi županiju / Pick a county",
	limit: 10,
	initial: 2,
	choices: [
		"Bjelovarsko-bilogorska",
		"Brodsko-posavska",
		"Dubrovačko-neretvanska",
		"Grad Zagreb",
		"Istarska",
		"Karlovačka",
		"Koprivničko-križevačka",
		"Krapinsko-zagorska županija",
		"Ličko-senjska",
		"Međimurska",
		"Osječko-baranjska",
		"Požeško-slavonska",
		"Primorsko-goranska",
		"Šibensko-kninska",
		"Sisačko-moslavačka",
		"Splitsko-dalmatinska",
		"Varaždinska",
		"Virovitičko-podravska",
		"Vukovarsko-srijemska",
		"Zadarska",
		"Zagrebačka"
	]
});

module.exports = prompt;
