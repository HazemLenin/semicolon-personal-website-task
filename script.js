// AOS
AOS.init({
	once: true,
});

// Dark theme
let themeBtn = document.getElementById("theme-btn");

let sunIcon = document.getElementById("sun-icon");
let moonIcon = document.getElementById("moon-icon");

function checkTheme() {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	if (localStorage.theme === "dark") {
		document.documentElement.classList.add("dark"); // add dark class to html tag

		// show sun icon
		sunIcon.classList.remove("!hidden");

		// hide moon icon
		moonIcon.classList.add("!hidden");
	} else {
		document.documentElement.classList.remove("dark");

		// remove moon icon
		moonIcon.classList.remove("!hidden");

		// hide sun icon
		sunIcon.classList.add("!hidden");
	}
}

checkTheme();

// if you found user selected dark mode before or the device is in dark mode
// Add dark class to html tag
// Change icon
// else
// Remove dark class from html tag
// Change icon

themeBtn.addEventListener("click", () => {
	// If sun is hidden (user pressed on moon )
	if (sunIcon.classList.contains("!hidden")) {
		localStorage.theme = "dark";
	} else {
		localStorage.theme = "light";
	}

	checkTheme();
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Typing effect (simple approach)
let typing = document.getElementById("typing");

let letterDelay = 100; // time between letters
let wordDelay = 2000; // time between words

let skills = ["Web Developer", "LOL Gamer", "Rock fan", "Marvel fan"];

// We want an infinite animation
async function type() {
	while (true) {
		// // Go through skills
		for (let skill of skills) {
			await typeSkill(skill);

			await sleep(wordDelay);

			await deleteSkill(skill);
		}
	}
}

async function typeSkill(skill) {
	for (let char of skill) {
		typing.innerHTML += char; // Add letter
		await sleep(letterDelay);
	}
}

async function deleteSkill(skill) {
	for (let char of skill) {
		typing.innerHTML = typing.innerHTML.slice(0, -1); // Removes last char
		await sleep(letterDelay);
	}
}

type();

// Carousel
$(".carousel").slick({
	dots: false,
	infinite: true,
	accessibility: false,
	mobileFirst: true,
	centerMode: true,
	variableWidth: true,
	prevArrow: $("#prev-btn"),
	nextArrow: $("#next-btn"),
});
