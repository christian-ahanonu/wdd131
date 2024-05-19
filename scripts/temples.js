// NAV MENU
const mainnav = document.querySelector ('.right-nav')
const hambutton = document.querySelector ('#menu')

hambutton.addEventListener ('click', () => {
    mainnav.classList.toggle('active');
    hambutton.classList.toggle('active');
});







// FOOTER 

// target the current year id in the HTML
const currentYear = document.getElementById('currentyear');


// Getting the current year and date
const today = new Date();

// Add the current year to the HTML document
currentYear.innerHTML = `${today.getFullYear()}`;

// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');

displayContent.textContent = `Last Modification: ${dateLastModified}`;


