'use strict'

// Output text
console.log("Hello World!");

//HUMAN READABLE LOGS
//Constant Variable text, don't use var
const text = "this is a message";
console.log(text);

// 
console.info(text);

//
console.dir(text);

//Logging Error: Warning, good for identifying where something may be going wrong
console.warn(text);

//Logging Error: Error, good for identifying errors
console.error(text);

// If you want to format what appears in the log...not often used.
//Use + to concatenate
console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

// Getting started with JavaScript
// Exercise 1.1: Create 4 different console logging statements, name, last name, where you are from and star sign
console.log("James");
console.info("Bond");
console.warn("England");
console.error("Scorpio")

//Exercise 1.2: Create 2 variables with your fav car and output to console
let carMake = "Aston Martin";
let carModel = "DB5";

console.log("My Favourite car is " + carMake + " and the model is " + carModel);

//try with template literals
console.log(`My Favourite car is ${carMake} and the model is ${carModel}`);

// Exercise 1.3: Create a message with CSS properities
const formattedText = "formatted message"
console.log("This text is going to be formatted %c" + formattedText, "color: orange; font-family: fantasy; font-style: bold; background-color: black; padding: 10px;");

