const { sample } = require("./helpers")

module.exports = {
	get talkTo() {
		return sample([
			"talk to",
			"contact",
			"speak with",
			"get in touch with",
			"consult with",
			"meet with",
		])
	},
	get groups() {
		return sample([
			"groups",
			"people",
			"meetings",
			"ambassadors",
			"representatives",
			"chapters",
		])
	},
	get nope() {
		return sample([
			"nope",
			"nah",
			"no",
			"none",
		])
	},
	get yeah() {
		return sample([
			"yes",
			"yep",
			"yeah",
			"yup",
			"yah",
			"ye",
			"yea"
		])
	},
	get atm() {
		return sample([
			"yet",
			"at the moment",
			"presently",
			"currently",
			"at the time being",
			"right now"
		])
	},
	get expectations() {
		return sample([
			"duties",
			"expectations",
			"responsibilities",
		])
	},
	get duty() {
		return sample([
			"duty",
			"responsibility",
			"expectation",
			"role"
		])
	},
	get patriots() {
		return sample([
			"patriots",
			"Americans",
			"my people",
			"Europeans",
			"whites",
		])
	},
	get homeland() {
		return sample([
			"homeland",
			"country",
			"fatherland",
			"motherland",
			"nation",
			"state"
		])
	}
}