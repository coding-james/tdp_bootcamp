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

//Ternary Statements
// ternary operator - ?
// syntax: condition ? valueIfTrue : valueIfFalse
//shortern code if you can, unless it will become more complicated to understand

let age = 10;
if(age>=25) {
    console.log("can buy alco");
}else{
    console.log("can't buy");
}

//Ternary
let tern = age>=25 ? "can buy alco" : "can't buy";
console.log(tern, "(ternary)");


//Objects - unordered collection of related data and stored in key value pairs
let personObj = {
    name: "James Bond",
    age: 45,
    job: "Secret Agent"
}

console.log("person: ", personObj);
console.log(JSON.stringify(personObj)); //method to take an object and convert to a string

//JSON - JavaScript Object Notation - would usually store elsewhere
let myObj = `[{
    "name": "James Bond",
    "age": 45,
    "job": "Secret Agent"
},
{
    "name": "Daniel Craig",
    "age": 48,
    "job": "Actor"
}]`;

console.log("JSON", myObj); //just stored as a string

// Example of loading JSON Data
//GET request (READ)
//Fetching data will often appear lower down the console, as takes longer to run and receive
fetch("people.json")
.then(response => response.json())
.then(data => console.log("fetch", data));


// Arrays - lists
// In JavaScript you can store different datatypes in the same list - not possible in all languages

const myArr = [1,"2",3,4,5,6,7];
const names = ["Vic", "Bob", "George", "Urika", "Mark"];
console.log(myArr);
console.log(names);

// Keys start at 0, so to return name 2, you'd actually state key 1
console.log(names[1]);

// Add to list
names.push("Dove from above");
console.log(names);

// Destructuring
// Allows us to extract data from arrays, get individual records
console.log(myArr[0]+myArr[1]); //not destructured

const [a1, a2, a3, a4, a5, a6, a7] = myArr;
console.log(a1+a2); //as a2 is a string add them in a string: 1 + "2" = 12
console.log(a1+parseInt(a2)); //pasrseInt finds the numbers in string and convert to numbers = 1 + 2 = 3

// spread operator - ...
const[name1, name2, ...rest] = names;
console.log(name2);
console.log("rest: ", rest);

const grades = [21, 43, 54, 64, 23, 96, 27, 84, 100];
const[,,,grade, ...others] = grades; //if we only wanted to store the 3 entry
console.log(grade);


// Functions / methods - sets of instructions you want to execute / reuse
// 3 ways to write functions

// function - global scope - can call function before it's been declared

myFun("normal function"); //intially will still try to run, but will do nothing

//declare the function
function myFun(p){
    console.log(p);
}

//multi
myFunB("bye","hi");
function myFunB(p, x){
    console.log(p+" "+x);
}


// function expression - has to be initialised before called
const myFun2 = function(x){
    console.log(x);
}

myFun2("function expression");


//arrow functions - more concise way of writing function expressions - has to be initialised before called
const myFun3 = (z) => console.log(z); //single thing
myFun3("arrow function");

//multi things
const myFun4 = (t,u) => {
    let sum = t + u;
    console.log(t,"+",u,"=",sum);
}

myFun4(3,4);