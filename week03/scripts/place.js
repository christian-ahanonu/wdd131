/*Display current year 
and Last Modified*/

const currentYear = document.getElementById('currentyear');
const today = new Date(); // Getting the current year and date

currentYear.textContent = `${today.getFullYear()}`;  // Add the current year to the HTML document

// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');

displayContent.textContent = `Last Modification: ${dateLastModified}`;


/*Calculate Wind Chill*/

const windChill = document.querySelector('windchill');

