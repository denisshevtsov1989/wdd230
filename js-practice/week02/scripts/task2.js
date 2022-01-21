/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = document.querySelector('#name');

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = 'Denis Shevtsov';

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = document.querySelector('#year');

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = 2022;
// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = "images/DenisShevtsov.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = 'images/DenisShevtsov.jpg';



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = document.querySelector('#food');

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = [' Burgers', ' Borsh', ' Lasania', ' Pizza'];

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavoriteFood = document.querySelector('#food2');

// Step 4: add the variable holding another favorite food to the favorite food array
document.querySelector('#food2').innerHTML = [' Chocolate', ' Ice cream', ' Meat in french', ' Cocoa'];

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = [' Burgers', ' Borsh', ' Lasania', ' Pizza'];

// Step 6: remove the first element in the favorite foods array
document.querySelector('#food').innerHTML = favoriteFood.shift();


/* I don't know how do next step(№7)
// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2



