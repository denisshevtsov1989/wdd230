function add(number1, number2) {
  return Number(number1) + Number(number2);
}
function addNumbers() {
  let num1 = document.getElementById("addend1").value;
  let num2 = document.getElementById("addend2").value;

  let inputValue = document.getElementById("sum");

  inputValue.value = add(num1, num2);
}
let addNumbersBtn = document.getElementById("addNumbers");
addNumbersBtn.addEventListener( "click" , addNumbers);



function subtract(number1, number2) {
  return Number(number1) - Number(number2);
}
function subtractNumbers() {
  let num1 = document.getElementById("minuend").value;
  let num2 = document.getElementById("subtrahend").value;

  let inputValue = document.getElementById("difference");

  inputValue.value = subtract(num1, num2);
}
let subtractNumbersBtn = document.getElementById("subtractNumbers");
subtractNumbersBtn.addEventListener( "click" , subtractNumbers);

function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}
function multiplyNumbers() {
  let num1 = document.getElementById("factor1").value;
  let num2 = document.getElementById("factor2").value;

  let inputValue = document.getElementById("product");

  inputValue.value = multiply(num1, num2);
}
let multiplyNumbersBtn = document.getElementById("multiplyNumbers");
multiplyNumbersBtn.addEventListener( "click" , multiplyNumbers);


function addNumbers() {
  let num1 = document.getElementById("addend1").value;
  let num2 = document.getElementById("addend2").value;

  let inputValue = document.getElementById("sum");

  inputValue.value = add(num1, num2);
}
let addNumbersBtn = document.getElementById("addNumbers");
addNumbersBtn.addEventListener( "click" , addNumbers);

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
