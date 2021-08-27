const dictionary = require("../dictionary");
const {
	sample,
	sampleMany,
	humanizeJoin,
	rndInt,
	shuffle
} = require("../helpers")

/**
 * This function should return a story about how you can help. Use patriotic themes and talk about your skill and dedication and what not
 */
module.exports = () => {
	const white = sample(["european", "aryan", "white"]);

	return sample([
		// N1
		(() => {
			let narrativeArr = []

			if (rndInt(0, 10) >= 4) {
				const attributes = sampleMany([
					"hard working",
					"dedicated",
					"adaptable",
					"dependable",
					"independent",
					"organized",
					"coordinated",
				], 3)
				narrativeArr.push(
					sample([
						`I am naturally ${humanizeJoin(attributes)}.`,
						`I have always been naturally ${humanizeJoin(attributes)}.`,
						`I am a ${humanizeJoin(attributes)} person.`,
					])
				);
			}
			if (rndInt(0, 10) >= 7) {
				const skills = sampleMany([
					"combat",
					"leadership",
					"research",
					"programming",
					"masonry",
					"building",
					"carpentry",
					"fishing",
					"firearms and training"
				], 3)

				narrativeArr.push(
					sample([
						`I am skilled in ${humanizeJoin(skills)}.`,
						`I have skills in ${humanizeJoin(skills)}.`,
						`I have skills in ${humanizeJoin(skills)} and use them in my daily life.`,
						`I am trained in ${humanizeJoin(skills)} and use them in my daily life.`,
						`I knowledgeable about ${humanizeJoin(skills)} and am training to be ${sample(["marine", "pilot", "infantry"])}.`,
					])
				);
			}

			narrativeArr = shuffle(narrativeArr)
			narrative = narrativeArr.join(" ");

			narrative = narrative + " " + sample([
				`I am dedicated to preseving the ${white} race and people of today and tomorrow.`,
				`My dedication is with the people of ${white} descent and I will use all skill to aid their existence.`,
				`Given my background and skills I will give what I can to save ${white} people with all my might, ${sample(["for it is my duty", "as my duty calls", "until my last breath", "here and until the end", `for ${white} children`])}.`,
				`I dedicate all my energy to fulfilling my duties to preserve my people and ${white} children.`,
				`I have connections to other ${white} groups that work on activism for our people and I am always looking for more groups to join.`,
				`I'm part of ${white} ${dictionary.groups} that work on activism for our people and I am always looking for more groups to join.`,
				`It's the ${dictionary.duty} of ${dictionary.patriots} to stand their ground when the existence of their people is at risk like it is for us.`,
				`It's my ${dictionary.duty} as a ${white} person to defend my people against foreigners who come to destroy my ${dictionary.homeland} ${sample(["like they did theirs", "like their countries", ""])}.`,
				`There is an existential risk that is my ${dictionary.duty} to fight against for my fellow ${white} descendants.`,
				`It's my ${dictionary.duty} as a ${white} person to defend my people against foreigners who come to destroy my ${dictionary.homeland} ${sample(["like they did theirs", ""])}.`,

			])

			return narrative;
		})(),
		// Duty of patriots
		// Struggle for survival
		// N2
		// I don't know exactly how to help but I am good at following instructions
		// Not in any way exactly because I'm looking to learn
		// I'm good at learning fast and am eager to join a community of my people.
		// I pick up things quickly and am always doing research about history and biology
		// N3
		// I'm younger and in touch on social media with others my age so I can share activist content
		// I'm old and experienced in survival tactics
		// N4
		// Promoting activist material
		// Traveling a lot
		// N5
		// I'm very knowledgeable about firearms and training
		// I am training to become a (marine)
		// N6
		// Good at public speaking and debates.
		// Good at researching and biology and history, knowledgeable and proud of my aryan descent.
		// N7 
		// I have a large social media following
	])
}