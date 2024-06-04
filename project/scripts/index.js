
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




// -------------SLIDESHOW---------------------- 

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}





// -------------DYNAMIC FOOTER---------------------- 

const today = new Date(); // Getting the current year and date
  
// target the current year id in the HTML
// Add the current year to the HTML document
const currentYear = document.getElementById('currentyear').textContent = `${today.getFullYear()}`;


// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').innerHTML = `Last Modification: ${dateLastModified}`;
 

