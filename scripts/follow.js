// document.addEventListener("DOMContentLoaded", function() {
//     const menuBtn = document.getElementById("menu-btn");
//     const navMenu = document.getElementById("navmenu");
  
//     menuBtn.addEventListener("click", function() {
//         navMenu.classList.toggle("show");
//     });
  
//     const menuItems = document.querySelectorAll("#navmenu a");
  
//     menuItems.forEach(item => {
//         item.addEventListener("click", function(event) {
//             event.preventDefault(); // Prevent default link behavior
  
//             const filter = item.classList.contains("home") ? "all" :
//                            item.classList.contains("old") ? "old" :
//                            item.classList.contains("new") ? "new" :
//                            item.classList.contains("large") ? "large" :
//                            item.classList.contains("small") ? "small" : "all"; // Default to displaying all temples
  
//             displayTemples(filter);
//         });
//     });
  
//     function displayTemples(filter) {
//         const templeContainer = document.getElementById("temple-container");
//         templeContainer.innerHTML = ""; // Clear previous content
        
//         const filteredTemples = filterTemples(filter);
        
//         filteredTemples.forEach(temple => {
//             const templeCard = createTempleCard(temple);
//             templeContainer.appendChild(templeCard);
//         });
//     }
  
//     displayTemples("all");
//   });
  
//   const temples = [
//   {
//     templeName: "Aba Nigeria",
//     location: "Aba, Nigeria",
//     dedicated: "2005, August, 7",
//     area: 11500,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//   },
//   {
//     templeName: "Manti Utah",
//     location: "Manti, Utah, United States",
//     dedicated: "1888, May, 21",
//     area: 74792,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
//   },
//   {
//     templeName: "Payson Utah",
//     location: "Payson, Utah, United States",
//     dedicated: "2015, June, 7",
//     area: 96630,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
//   },
//   {
//     templeName: "Yigo Guam",
//     location: "Yigo, Guam",
//     dedicated: "2020, May, 2",
//     area: 6861,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
//   },
//   {
//     templeName: "Washington D.C.",
//     location: "Kensington, Maryland, United States",
//     dedicated: "1974, November, 19",
//     area: 156558,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
//   },
//   {
//     templeName: "Lima Perú",
//     location: "Lima, Perú",
//     dedicated: "1986, January, 10",
//     area: 9600,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
//   },
//   {
//     templeName: "Mexico City Mexico",
//     location: "Mexico City, Mexico",
//     dedicated: "1983, December, 2",
//     area: 116642,
//     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//   },
  
//   {
//     templeName: "Tokyo Japan",
//     location: "Tokyo, Japan",
//     dedicated: "1980, October, 27",
//     area: 128337,
//     imageUrl: "https://churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default"
//   },
//   {
//     templeName: "Paris France",
//     location: "Paris, France",
//     dedicated: "2017, May, 21",
//     area: 44000,
//     imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
//   },
//   {
//     templeName: "Bangkok Thailand",
//     location: "Bangkok, Thailand",
//     dedicated: "2022, January, 23",
//     area: 43386,
//     imageUrl: "https://churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/320%2C/0/default"
//   }
  
//   ];
  
//   function filterTemples(filter) {
//     switch (filter) {
//         case "old":
//             return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
//         case "new":
//             return temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
//         case "large":
//             return temples.filter(temple => temple.area > 90000);
//         case "small":
//             return temples.filter(temple => temple.area < 10000);
//         default:
//             return temples;
//     }
//   }
  
//   function createTempleCard(temple) {
//     const card = document.createElement("div");
//     card.classList.add("temple-card");
  
//     const cardContent = document.createElement("div");
//     cardContent.classList.add("temple-card-content");
  
//     const name = document.createElement("h3");
//     name.textContent = temple.templeName;
  
//     const location = document.createElement("p");
//     location.textContent = temple.location;
  
//     const dedicated = document.createElement("p");
//     dedicated.textContent = "Dedicated: " + temple.dedicated;
  
//     const area = document.createElement("p");
//     area.textContent = "Area: " + temple.area + " square feet";
  
//     cardContent.appendChild(name);
//     cardContent.appendChild(location);
//     cardContent.appendChild(dedicated);
//     cardContent.appendChild(area);
  
//     const image = document.createElement("img");
//     image.src = temple.imageUrl;
//     image.alt = temple.templeName;
  
//     card.appendChild(cardContent);
//     card.appendChild(image);
  
//     return card;
//   }
  

// Get DOM Elements
const currentYear = document.querySelector('#year');
const lastModification = document.querySelector('#lastModification');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`

// Eevents Listener
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
})

// temple container
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Apia Samoa",
		location: "Apia, Samoa",
		dedicated: "1983, August  5",
		area: 18691,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
	  },
	  {
		templeName: "Accra Ghana",
		location: "Accra, Ghana",
		dedicated: "2004, January 11",
		area: 17500 ,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
	  },
	  {
		templeName: "Barranquilla Colombia",
		location: "Barranquilla Atlantico, Colombia",
		dedicated: "2018, December 9",
		area: 25349,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg"
	  },
	// Add more temple objects here...
  ];
  
  const container = document.querySelector("#cards");
  
  function displayTemplePix(aList) {
    document.querySelector("#cards").innerHTML = "";
    aList.forEach(element => {
      const imageContainer = document.createElement("section");
      imageContainer.classList.add("image-container");

      const titleTag = document.createElement("h1");
      const locationTag = document.createElement("p");
      const dedicatedTag = document.createElement("p");
      const areaTag = document.createElement("p");

      const templeName = `${element.templeName}`;
      const location = `<span>LOCATION: </span>${element.location}`;
      const dedicated = `<span>DEDICATED: </span>${element.dedicated}`;
      const area = `<span>SIZE: </span>${element.area}`;
      const alternate = `${element.alternate}`;
      const source = `${element.imageUrl}`;

      titleTag.innerHTML = templeName;
      locationTag.innerHTML = location;
      dedicatedTag.innerHTML = dedicated;
      areaTag.innerHTML = area;

      const imageTag = document.createElement("img");
      imageTag.setAttribute("src", source);
      imageTag.setAttribute("class", "images");
      imageTag.setAttribute("loading", "lazy");
      imageTag.setAttribute("width", "400");
      imageTag.setAttribute("height", "225");
      imageTag.setAttribute("alt", alternate);

      imageContainer.appendChild(titleTag);
      imageContainer.appendChild(locationTag);
      imageContainer.appendChild(dedicatedTag);
      imageContainer.appendChild(areaTag);
      imageContainer.appendChild(imageTag);

      container.append(imageContainer);
    });
}





displayTemplePix(temples);

const oldTemples = document.querySelector("#old");
oldTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
});


const largeTemples = document.querySelector("#large");
largeTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area > 90000));
});

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.area < 10000));
});

const newTemples = document.querySelector("#new");
newTemples.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
});

const home = document.querySelector("#home");
home.addEventListener('click', () => {
  document.querySelector("#cards").innerHTML = "";
  displayTemplePix(temples);
});