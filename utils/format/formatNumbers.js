module.exports = (num, isEnglish) => {
	const format = isEnglish ? "en-US" : "de-DE";
	return num.toLocaleString(format);
};
