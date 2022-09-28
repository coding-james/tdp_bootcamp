// Console outputs
console.log("hello world"); // print - informational
console.error("This is an error"); //log errors in your code
console.warn("This is a warning"); //groups together multiple console outputs
console.group("hellos"); //start of a group
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.groupEnd(); //end of group

// Variables - containers for information
// 
// There are 3 specific ways to declare variables
// const - constant, once assigned a value, it is not changed
// let - block scoped variable, can update it's value
// var - do not use

let a = "abc"
console.log("type of a: ",typeof a);
console.log("value :", a);

a = 123;
console.log("type of a: ",typeof a);
console.log("value :", a);

// Datatypes
// string, boolean, number, null, undefined, symbol, NaN
console.log(typeof(true)); //change true to relevant variable or data to check datatype


//Operators
// =, -, /, *, %
// >, <, >=, <=
// && and || or - logical
// & and | or - bitwise - will check both, best for checking booleans
// = assignment
// == compares and checks equality of values (do they equal each other)
// === as above but also checks datatypes
console.log(1 == "1"); //true - checks values
console.log(1 === "1"); //false - checks value and datatype


// Iteration (Loops)
// a set of instructions to repeatly run until something tells it to stop
console.group("Iterations");

// For Loop - If you know the end point / how many times you want it to repeat
// While Loop - Only excutes (run) when a condition is true
// Do While Loop - as above, but will run at least once

//For Loop
// for(intialisation;condition;iterator){statements}
// intialisation i = 0
// condition i is less than or equal to 10
// iterator i + 1
// statement - print i to the console
for(let i=0; i<=10;i++) {
    console.log(i);
}

//If you want the incrementer to be more or less than 1
for(let i=0; i<=10; i+=2) {
    console.log(i);
}

// While Loop
let i = 15;

while(i>20){
    console.log("while loop");
}
// didn't run as criteria not met

// Do While Loop
do{
    console.log("do while loop");
}while(i>20);
// ran once, but as condition not met, it stopped

console.groupEnd(); //end of group


// Conditionals
// truthy & falsey - all values have an inherent boolean value, this defaults to truthy
// examples of falsey - undefined, 

// If statement
let temp = 12;
if(temp<20){
    console.log("turn heating on");
} else if (temp>=20 && temp<=27){
    console.log("turn on AC");
}else{
    console.log("do nothing");
}

// Switch case
// Use when you know there are specific number of cases
// code finds the first criteria met, but will then run all the code below, if we don't include a break
let day = "Fri";
switch(day){
    case "Mon":
        console.log("Day 1");
        break;
    case "Tue":
        console.log("Day 2");
        break;
    case "Wed":
        console.log("Day 3");
        break;
    case "Thu":
        console.log("Day 4");
        break;
    default:
        console.log("not a day we're interested in")
}