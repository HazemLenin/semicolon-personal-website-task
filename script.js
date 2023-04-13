// AOS
AOS.init({
    disable: /bot|crawler|spider|crawling/i.test(navigator.userAgent), // Disable AOS if the visitor is a web crawler
    once: true
});

// Dark theme
let themeBtn = document.getElementById('theme-btn');
let sunIcon = document.getElementById('sun-icon');
let moonIcon = document.getElementById('moon-icon');

function checkTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (sunIcon.classList.contains("!hidden")) {
            sunIcon.classList.remove("!hidden");
        }
        if (!moonIcon.classList.contains("!hidden")) {
            moonIcon.classList.add("!hidden");
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (moonIcon.classList.contains("!hidden")) {
            moonIcon.classList.remove("!hidden");
        }
        if (!sunIcon.classList.contains("!hidden")) {
            sunIcon.classList.add("!hidden");
        }
    }
}

checkTheme();

themeBtn.addEventListener("click", () => {
    // if sun is hidden (user pressed on moon )
    if (sunIcon.classList.contains('!hidden')) {
        localStorage.theme = 'dark';
    }
    else
    {
        localStorage.theme = 'light';
    }
    checkTheme();
});

// Typing effect
let typing = document.getElementById("typing");
let cursor = document.getElementById("cursor");
let txt = typing.innerText;
let skills = [
    "Web Developer",
    "LOL Gamer",
    "Rock fan",
    "Marvel fan"
];

let skillsIndex = 0; // which word we are in now
// let blink = true; // it's now in scss and later I will make cursor blinks on finishing typing a word
let i = 0; // which letter we are in now
let speed = 100; // typing speed (delay between letters)
let delay = 2000;

// type word letters
function typeWord() {
    if (i < skills[skillsIndex].length) {
        typing.innerText += skills[skillsIndex].charAt(i);
        i++;
        // calls itself after milliseconds to type next letter
        setTimeout(() => typeWord(), speed);
    } else {// when word is completed, start deleting it after 2 sec
        setTimeout(() => deleteWord(), delay);
    }
}

function deleteWord() {
    if (i >= 0) {
        // deletes last character
        typing.innerText = typing.innerText.replace(/(\s+)?.$/, '');
        i--;
        // calls itself after milliseconds to delete previous letter
        setTimeout(() => deleteWord(skills[skillsIndex]), speed);
    } else {
        i = 0;
        // is word finished ? start from first letter : move to next letter
        skillsIndex++;
        skillsIndex %= skills.length;
        typeWord();
    }

}

// start recursioning
typeWord();

// Carousel
$('.carousel').slick({
    dots: false,
    infinite: true,
    accessibility: false,
    mobileFirst: true,
    centerMode: true,
    variableWidth: true,
    prevArrow: $('#prev-btn'),
    nextArrow: $('#next-btn')
  });