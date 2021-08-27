var faker = require('faker');
const dictionary = require('../dictionary');

const {
	sample,
	sampleMany,
	rndInt,
	capitalize
} = require('../helpers');

module.exports = () => {
	const state = faker.address.state();
	const socialMedia = sample(["Gab", "Parler", "Twitter", "Instagram", "Facebook", "Discord", "Whatsapp", "Telegram"])

	if (rndInt(1, 10) >= 4) {
		return sample([
			`${capitalize(dictionary.nope)} just ${sample(["anxiously", "eagerly", "patiently", ""])} ${sample(["standing by", "awaiting", "waiting"])} for a response`,
			`${capitalize(dictionary.nope)} Not ${dictionary.atm} just looking to get in touch`,
			`Not ${dictionary.atm} ${dictionary.nope}`,
			`${capitalize(dictionary.atm)} ${dictionary.nope}`,
			`Just looking to get in touch so ${dictionary.nope}`,
			`${capitalize(dictionary.atm)} just looking to get in touch so ${dictionary.nope}`,
			dictionary.nope,
			"",
			"",
			"",
			sample(["", "", "", "", "n/a"])
		])
	} else {
		let introduction = sample([
			`${capitalize(dictionary.yeah)} this is what I'm wondering`,
			"Here is my questions",
			"My question is are",
			`${capitalize(dictionary.yeah)} this is my question`,
			`${capitalize(dictionary.yeah)} here it is`,
			``,
			``,
			``
		]);
		if (!!introduction) {
			introduction = `${introduction}${sample([":", ";", "-", ".", ",", "\n"])} `
		}

		const list = (
			sampleMany([
				// Are there groups i can talk to 
				sample([
					`Are there ${dictionary.groups} I can ${dictionary.talkTo} in ${state}?`,
					`Do you have ${dictionary.groups} I can ${dictionary.talkTo} in ${state}?`,
					`I'm looking for ${dictionary.groups} in ${state}?`,
					`I'm looking to ${dictionary.talkTo} ${dictionary.groups} in ${state} do you have any?`,
				]),
				// Do you take donations
				sample([
					"Do you take donations?",
					"Do you accept any donations",
					"Are donations welcome?",
					"Do you have a bitcoin wallet for donations?"
				]),
				// what do you expect from members of the organization?
				sample([
					`What are the ${dictionary.expectations} of ${dictionary.groups} members?`,
					`What will be my ${dictionary.expectations} as a member?`,
				]),
				// What are the next steps?
				sample([
					"What are the next steps of the process?",
					"After this will someone reach out to me?",
					"Will someone be reaching out to me after this?",
					"What are the steps after application?",
					"What are the next steps after this?",
					"What happens after this process?",
					"What are the steps after this?"
				]),
				// How long have you been around
				sample([
					"When were you founded?",
					"How long have you been around?",
					"Since when are you around?",
					"How long have you been active?"
				]),
				// Do you have (social media?)
				sample([
					`Are you on ${socialMedia}?`,
					`Can I find you on ${socialMedia}?`,
					`Do you have ${socialMedia}?`,
					`Are you active on ${socialMedia}?`,
				])
			], rndInt(1, 4))
		)


		const listFormatType = sample([
			"br",
			"ul",
			"n",
		]);
		const b = sample(["-", "*", "+", "•"])
		const nb = sample([". ", ") "])

		console.log(list);
		const formattedList = list.map((question, i) => {
			let str = `${question}`
			switch (listFormatType) {
				case "br":
					if (i == 0) return str
					str = "\n" + str;
					break;
				case "ul":
					str = `\n ${b} ${str}`
					break;
				case "n":
					str = `\n ${i+1}${nb} ${str}`
					break;
				default:
					if (i == 0) return str
					str = " " + str
					break;
			}
			return str;
		}).join("")
		console.log(formattedList);

		return introduction + formattedList;
	}
}