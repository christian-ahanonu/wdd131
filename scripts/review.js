
//Counting and localStorage
const textCount = document.getElementById("count");

let countLocalStorage = Number(window.localStorage.getItem("countingForm")) || 0;

function sumLocalStorage(){
    //This function will exucate each time the form was sent.
    countLocalStorage ++;
    window.localStorage.setItem("countingForm", countLocalStorage);
    // textCount.textContent = `Thanks! this was your ${countLocalStorage} time`;
}

sumLocalStorage();





// -------------DYNAMIC FOOTER---------------------- 

const today = new Date(); // Getting the current year and date
  
// target the current year id in the HTML
// Add the current year to the HTML document
const currentYear = document.getElementById('currentyear').textContent = `${today.getFullYear()}`;


// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').innerHTML = `Last Modification: ${dateLastModified}`;
 
