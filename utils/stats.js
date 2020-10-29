const recentStats = require("./stats/last");
const byCountiesStats = require("./stats/byCounties");
const { getLastDataByCounties, getData } = require("./api");

module.exports = async (flags, input) => {
	if (flags.counties) {
		const data = await getLastDataByCounties();
		await byCountiesStats(data, flags, input);
	} else {
		const data = await getData();
		await recentStats(data, flags);
	}
};
