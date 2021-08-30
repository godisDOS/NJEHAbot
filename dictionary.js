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
	},
	get usurped() {
		return sample([
			"usurped",
			"taken",
		])
	},
	get believe() {
		return sample([
			"believe",
			"think"
		])
	},
	get country() {
		return sample([
			"country",
			this.homeland,
			"territory",
		])
	},
	get efforts() {
		return sample([
			"movements",
			"efforts",
			"conspiracies"
		])
	},
	get eliminate() {
		return sample([
			"eliminate",
			"genocide",
			"remove",
			"destroy",
			"kill"
		])
	},
	get schools() {
		return sample([
			"colleges",
			"schools",
			"college campuses",
			"universities",
		])
	},
	get theRed() {
		return sample([
			"marxism",
			"communism",
			"radicalism",
			"liberalism",
			"race realism",
			"feminism",
		])
	},
	get elites() {
		return sample([
			"elites",
			"mass media",
			"corporations",
			"them",
			"(((them)))",
			"the ruling class",
			`${this.theRed} media`,
		])
	},
	get foreigners() {
		return sample([
			"foreigners",
			"lessers",
			"browns",
			"immigrants"
		])
	},
	get invade() {
		return sample([
			"invade",
			"break into",
			"sabotage",
			"fill up",
		])
	},
	get wokeness() {
		return sample([
			"wokeness",
			"diversity",
			"acceptance",
			"tolerance",
		])
	},
	get cancelCulture() {
		return sample([
			"cancel culture",
			"cancelation",
			"censorship",
			"silencing",
			"policial correctness"
		])
	},
	get facts() {
		return sample([
			"facts",
			"facts and logic",
			"logic",
			"simple facts",
			"the facts",
			"reason",
		])
	},
	get media() {
		return sample([
			"media",
			"mainstream media",
		])
	},
	get corrupted() {
		return sample([
			"corrupted",
			"corrupt",
			"destroyed",
			"degenerated",
		])
	},
	get silentMajority() {
		return sample([
			"silent majority",
			"people",
			"masses",
			"majority"
		])
	},
	get foundingFathers() {
		return sample([
			"founding fathers",
			"forefathers"
		])
	},
	get dedicated() {
		return sample([
			"dedicated",
			"focused",
			"driven",
		])
	}
}