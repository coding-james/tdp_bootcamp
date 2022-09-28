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