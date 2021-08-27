var faker = require("faker");
const puppeteer = require("puppeteer");
const areYouEuro = require("./answer_generators/areYouEuro");
const doYouHaveQuestions = require("./answer_generators/doYouHaveQuestions");
const howCanYouHelp = require("./answer_generators/howCanYouHelp");
const {
	typofy,
	delay
} = require("./helpers");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
	});
	const page = await browser.newPage();
	await page.goto("https://www.njeha.com/contact/");
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email(firstName, lastName);
	const areYouEuropean = typofy(areYouEuro());
	const questions = typofy(doYouHaveQuestions());
	const helping = typofy(howCanYouHelp());

	console.log(`
	${firstName} ${lastName} (${email})

	ARE YOU EUROPEAN?
	${areYouEuropean}

	HOW CAN YOU HELP?
	${helping}

	DO YOU HAVE QUESTIONS?
	${questions}
	`);

	await page.type(
		"#nf-field-12",
		firstName + " " + lastName
	);
	await page.type("#nf-field-12", String.fromCharCode(13));

	await page.type(
		"#nf-field-13",
		email
	);
	await page.type("#nf-field-13", String.fromCharCode(13));

	await page.type(
		"#nf-field-14",
		areYouEuropean
	);
	await page.type("#nf-field-14", String.fromCharCode(13));

	await page.type(
		"#nf-field-17",
		helping
	);
	await page.type("#nf-field-17", String.fromCharCode(13));

	await page.type(
		"#nf-field-18",
		questions
	);
	await page.type("#nf-field-18", String.fromCharCode(13));

	console.log("Submitting... Press (CTRL+C) to cancel");
	await delay(3000);
	await page.click("#nf-field-16");
	console.log("All done!");
	await delay(2000);
	await browser.close();
})();