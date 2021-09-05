module.exports = (num, isEnglish) => {
	const format = isEnglish ? "en-US" : "de-DE";
	return new Intl.NumberFormat(format).format(num);
};
