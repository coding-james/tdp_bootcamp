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

// ITERATION / LOOPS

// FOR - uses a counter, runs while condition is met
// i is used to represent iteration
for(let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}


// WHILE - works with booleans, run until a condition is no longer true
let condition = true;
let increment = 0;

while(condition === true) {
    console.log(`increment = ${increment}`);
    increment++;

    if(increment === 3) {
        condition = false;
    }
}


// DO-WHILE - like a while loop, but will ALWAYS run at least once
let z = false;
do {
    console.log("run forest run");
} while(z === true);


// SWITCH CASES - run until a break or return, can be more effective than large if-else statements
let num = 1;

switch(num) {
    case 0:
        console.log("number is zero");
        break;
    case 1:
        console.log("we are number one");
    case 4:
        console.log("we're at 4");
    case 10:
        console.log("we made it to ten!");
        break;
    default:
        console.warn("not here");
}

// Cameron example
// iterator is equal to 2
// condition is i<6
// if true print i + 1
// then interate i by 2
// if false stop

// WHILE
let i = 2;
while(i<=6) {
    console.log(i+1);
    i = i + 2;
}

// FOR
for(let i = 2; i <=6; i = i + 2) {
    console.log(i+1);
}

// Exercise 3.1 - Recreate the Flow Chart as a Loop
let A = 100;
while(A <= 200) {
    console.log(`A = ${A}`);
    A++;
}

// As FOR LOOP
for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}

// Exercise 3.2 - Recreate the Flow Chart as a Loop
let B = 100;

while(B <= 200) {
    if(B % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    B++;
}

// As FOR LOOP
for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("loop -");
    } else {
        console.log("loop *")
    }
}

// Exercise 3.3 - Create a method that can print numbers 1 - 10, 10 times each
for(let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

// Exercise 3.4 - SWITCH STATEMENT
let today = new Date();
let day = today.getDay();

switch(day) {
    case 0:
        console.log("It's Sunday");
        break;
    case 6:
        console.log("It's Saturday");
            break;
    case 1:
        console.log(`Happy Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    default:
        console.warn("You didn't enter a day of the week");
        break;
}