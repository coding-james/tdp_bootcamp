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

// VARIABLES
//let can change value, called Mutable
//const can't be changed, called Immutable
//var no longer used as insecure, was similar to let.

// KEY PAIRS
let myObject = {
    key : "value",
    anotherKey : 12345
};

console.log(myObject);

let myDetails = {
    myFirstName : "James",
    myLastName : "Bond",
    myCar : "Aston Martin DB5"
};

console.log(myDetails);

//String interpolation
//using one string and literals containg placeholders
//called template literal
// remeber to use ` instead of "" or ''

let stringCalc = `13 * 12 = ${13 * 12}`;
console.log(stringCalc);


//VARIABLES EXERCISE

// Exercise 2.1: Fint JavaScripts types:

let a;
let b = "12345";
let c = 12345;
let d = true;
let e = {a: "JavaScript"};

console.log(a + " is a " + typeof(a));
console.log(b + " is a " + typeof(b));
console.log(c + " is a " + typeof(c));
console.log(d + " is a " + typeof(d));
console.log(e + " is a " + typeof(e));

//  Exercise 2.2: Use template litrals to dynamically change the sentence

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`)