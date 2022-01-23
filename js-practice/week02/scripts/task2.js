/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = document.querySelector('#name');

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = 'Denis Shevtsov';

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = document.querySelector('#year');


// Step 4: place the value of the current year variable into the HTML file


// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = "DenisShevtsov.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').src = 'images/DenisShevtsov.jpg';
var elems = document.getElementsByTagName('img');
for(var i=0; i<elems.length; i++) elems[i].style.width='200px';


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const fruits = ["Borsh", "Burger", "Pizza", "Ice cream"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML = fruits;

// Step 3: declare and instantiate a variable to hold another favorite food
fruits.push("Lasania");
// Step 4: add the variable holding another favorite food to the favorite food array
document.getElementById("food2").innerHTML = fruits;
// Step 5: repeat Step 2
document.getElementById("food").innerHTML = fruits;

// Step 6: remove the first element in the favorite foods array
fruits.shift("Borsh");

// Step 7: repeat Step 2
document.getElementById("food2").innerHTML = fruits;

// Step 8: remove the last element in the favorite foods array
fruits.pop("Lasania");

// Step 7: repeat Step 2
document.getElementById("food2").innerHTML = fruits;



