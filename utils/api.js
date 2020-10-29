// a *very* simple API wrapper for koronavirus.hr
const fetch = require("node-fetch");
const sym = require("log-symbols");
const ora = require("ora");

const spinner = ora({ text: "" });

// API wrapper function
async function fetchResource(path) {
	try {
		spinner.start();
		const url = `https://www.koronavirus.hr/json/?action=${path}`;
		const res = await fetch(url);
		if (!res.ok) {
			spinner.stop();
			throw new Error(`${sym.error} HTTP error! Status: ${res.status}`);
		} else {
			spinner.stop();
			const data = await res.json();
			return data;
		}
	} catch (e) {
		spinner.stop();
		console.log(sym.error, e);
	}
}

function getData() {
	return fetchResource("podaci");
}

function getLastData() {
	return fetchResource("podaci_zadnji");
}

function getDataByCounties() {
	return fetchResource("po_danima_zupanijama");
}

function getLastDataByCounties() {
	return fetchResource("po_danima_zupanijama_zadnji");
}

function getDataByDemographics() {
	return fetchResource("po_osobama");
}

module.exports = {
	getData,
	getLastData,
	getDataByCounties,
	getLastDataByCounties,
	getDataByDemographics
};
