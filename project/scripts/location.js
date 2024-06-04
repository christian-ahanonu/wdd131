// -------------SHOW/HIDE HAMBURGER---------------------- 

document.addEventListener("DOMContentLoaded", function() {
    const showMenu = document.getElementById('show-menu');
    const hideMenu = document.getElementById('hide-menu');
    const linkFlex = document.querySelector('.link-flex');
  
    showMenu.addEventListener('click', function() {
        linkFlex.classList.add('active');
    });
  
    hideMenu.addEventListener('click', function() {
        linkFlex.classList.remove('active');
    });
});



// -------------DYNAMIC FOOTER---------------------- 

const today = new Date(); // Getting the current year and date
  
// target the current year id in the HTML
// Add the current year to the HTML document
const currentYear = document.getElementById('currentyear').textContent = `${today.getFullYear()}`;


// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').innerHTML = `Last Modification: ${dateLastModified}`;
 