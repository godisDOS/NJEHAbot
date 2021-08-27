const {
	rndInt,
	sample,
	capitalize
} = require("../helpers")
const dictionary = require('../dictionary');

module.exports = () => {
	const race = sample([
		"European",
		"German",
		"French",
		"Anglosaxon",
		"Italian",
		"Nordic",
		"Icelandic",
		"Scandinavian",
		"Scottish",
		"Irish",
		"English",
		"Austrian",
		"Turkish",
		"Belgian",
		"Russian",
		"British",
	]);
	let racePercentage = race;
	if (rndInt(0, 10) >= 5) {
		if (rndInt(0, 10) >= 5) {
			racePercentage = `${rndInt(50, 95)}% ${race}`
		} else {
			racePercentage = `${sample(["Mostly", "Majority"])} ${race}`
		}
	}

	if (rndInt(0, 10) >= 5) {
		let ans = capitalize(sample([
			dictionary.yeah,
			dictionary.yeah,
			dictionary.yeah,
			"Yeah",
			"Yes I am",
			"Yes",
			"I am",
			"I am yes",
			"Yup"
		]))
		if (rndInt(1, 10) >= 5) {
			ans = ans + sample([". ", ", ", "; "]) + sample([
				`I am ${racePercentage}`,
				`I'm of ${racePercentage} descent`,
				`I'm ${racePercentage}`,
				`${racePercentage}`,
				race,
			])
		}
		return ans
	} else {
		return sample([
			`${capitalize(dictionary.yeah)}, I am of ${racePercentage} descent`,
			`My family and I are of ${racePercentage}`,
			`I'm a descendant of ${racePercentage} people`,
			`My descent is ${racePercentage}`,
			racePercentage,
			race,
			`My ancestry is ${racePercentage}`,
			`My parents are ${race}`,
			`I am proud to be ${race}`,
			`I'm a proud ${racePercentage}`
		])
	}
}