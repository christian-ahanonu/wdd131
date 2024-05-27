// FOOTER 
const currentYear = document.getElementById('currentyear'); // target the current year id in the HTML
const today = new Date(); // Getting the current year and date

currentYear.textContent = `${today.getFullYear()}`; // Add the current year to the HTML document

// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').textContent = `Last Modification: ${dateLastModified}`;
