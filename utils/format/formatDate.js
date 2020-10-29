module.exports = (date, isEnglish, includeTime) => {
	const format = isEnglish ? "en-US" : "de-DE";
	const time = `, ${new Date(date).toLocaleTimeString(format).slice(0, -3)}`;
	return `${new Date(date).toLocaleDateString(format)}${
		includeTime ? time : ""
	}`;
};
