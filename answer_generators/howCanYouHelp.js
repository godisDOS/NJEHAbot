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
					"loyal",
					"dedicated",
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
				`I ${dictionary.believe} that we must take ${humanizeJoin(sampleMany(["ethnic", "govermental", "political", "economic", "social"], rndInt(1, 3)))} control away from the elites who have ${dictionary.usurped} power in our ${dictionary.homeland}.`,
				`${humanizeJoin(sampleMany(["Ethnic", "Govermental", "Political", "Economic", "Social"], rndInt(1, 3)))} power must be taken away from the elites who have ${dictionary.usurped} power in our ${dictionary.homeland}.`,
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
		(() => {
			let narrativeArr = [];

			// describe what exists
			narrativeArr.push(
				sample([
					`In our ${dictionary.country} there are ${dictionary.efforts} to ${dictionary.eliminate} the ${white} race.`,
					`For ${sample(["years", "decades", "centuries", "a long time"])} in our ${dictionary.country} there have been ${dictionary.efforts} to ${dictionary.eliminate} our people.`,
					`There are ${dictionary.efforts} in our ${dictionary.homeland} to ${dictionary.eliminate} ${white} people that have gone on for very long.`,
					`There is a world of information being hidden from the ${dictionary.silentMajority} about the ${dictionary.efforts} against ${white} people.`,
					`As a ${white} descendant I cannot stand by the side lines as our ${dictionary.country} is ${dictionary.corrupted} against us.`,
					`I cannot stand by the side lines as our ${dictionary.country} is ${dictionary.corrupted} against ${white} descendants.`,
					`I cannot stand by the side lines as our ${dictionary.country} is ${dictionary.corrupted} by ${dictionary.elites}.`,
				]) + " " +
				sample([
					`In ${dictionary.schools} students are taught to hate their own race and instead taught ideas of ${dictionary.theRed}.`,
					`Within our ${dictionary.schools} we are taught to accept forced diversity and ${dictionary.theRed}.`,
					`Increasingly the media is okay with teaching us to accept ${dictionary.theRed} as the norm.`,
					`Our country is becoming ${dictionary.corrupted} by ideas of ${dictionary.theRed} which is furthered by ${dictionary.elites}.`,
					`We are taught subservience as ${dictionary.foreigners} ${dictionary.invade} our ${dictionary.country}.`,
					`People must accept forced ${dictionary.wokeness} or face ${dictionary.cancelCulture}.`,
					`We are forced to behave through ${dictionary.wokeness} out of fear for ${dictionary.cancelCulture}.`,
					`The masses will not listen to ${dictionary.facts} and instead follow the ${dictionary.media}.`
				])
			)
			// we must
			narrativeArr.push(
				sample([
					`Like our ${dictionary.foundingFathers} would have wanted we must stand up to our ${dictionary.expectations} and build a country for ${white} people once again.`,
					`Just like the ${dictionary.foundingFathers} would have wished we must meet our ${dictionary.expectations} and rebuild our ${dictionary.homeland} which has been stolen.`,
					`We must not passively accept a ${dictionary.corrupted} society for our children and rise up like our ${dictionary.foundingFathers} did for our ${dictionary.homeland}.`,
					`It is a sin to passively wait for our ${dictionary.corrupted} society to be stolen from our children.`,
					`We must act against the ${dictionary.wokeness} pushed by ${dictionary.elites} in order to preserve a future for the ${white} race.`,
					`It is the duty of ${dictionary.patriots} to stand against the wave of ${dictionary.foreigners} in order to preserve a healthy future for ${white} children.`,
					`For our children we must fulfil our ${dictionary.expectations} and fight against the ${dictionary.elites} for a better ${dictionary.country}.`,
					`The ${white} man is not one to ${sample('whine', 'complain', 'fear')} as society is ${dictionary.corrupted}, but instead needs to act for their children and ${dictionary.homeland}.`,
					`The ${sample('fact', 'simple fact', 'situation')} is that our ${dictionary.homeland} is being stolen and we must fight back to retake it.`,
				]) + " " + sample([
					`Blood must be payed in order to ensure the existence of the ${white} race and our descendants.`,
					`We must dedicate ourselves to existence of the ${white} race and our children.`,
					`There must be swift action to be taken to establish a new ${dictionary.homeland} where our children can thrive without fear of ${dictionary.foreigners} and ${dictionary.theRed}.`,
					`We must act as ${white} men to a new ${dictionary.homeland} where our children can live without fear of ${dictionary.foreigners} and ${dictionary.theRed}.`,
				])
			)
			// how i can help
			narrativeArr.push(
				...sampleMany([
					`I am ${dictionary.dedicated} to give everything to ensure a future.`,
					`We must give everything to ensure a better future.`,
					`It is my duty to give everything to ensure our people from stopping the ${dictionary.efforts} to ${dictionary.eliminate} our people.`,
					"We must establish the means to communicate with our people this message through media and controlled news.",
					"We must take action to wake our people and call them into action.",
					`We must take swift action against those that are destroyed our ${dictionary.homeland}.`,
					`There must be efforts to ${humanizeJoin(["flyer", "campaign", "protest", "unify"])} in order to spread our message.`,
					`We must engage our people and community through ${humanizeJoin(["flyering", "campaigning", "protesting"])} in order to spread our mission.`,
				], 3)
			)

			narrativeArr = shuffle(narrativeArr);
			narrative = narrativeArr.join(" ");

			return narrative;
		})()
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