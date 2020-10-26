module.exports = async (counties, choice) => {
	// default value for sorting
	let sorter = "broj_zarazenih";
	// check choice (aktivni, zarazeni, preminuli)
	if (choice.includes("aktivni")) {
		sorter = "broj_aktivni";
	}
	if (choice.includes("preminuli")) {
		sorter = "broj_umrlih";
	}
	return counties.sort(function (obj1, obj2) {
		return obj2[sorter] - obj1[sorter];
	});
};
