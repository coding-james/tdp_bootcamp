"use strict"

//CALLBACKS - pass in a function as an argument, parameter, intro, input into another

// const greet = (firstname, lastname) => {
//     console.log(firstname, lastname);
//     alert(`Hello ${firstname}, ${lastname}`);
// }

// const bye = (firstname, lastname) => {
//     console.log(firstname, lastname);
//     alert(`Bye ${firstname}, ${lastname}`);
// }

// const fullname = (f, l) => console.log(f+l);

// const userInput = (callback) => {
//     let fname = prompt("Please enter your first name: ");
//     let sname = prompt("Please enter your last name: ");
//     // greet(fname, sname);
//     callback(fname, sname);
// }

// // greet("James", "Bond");
// userInput(greet);
// userInput(bye);
// userInput(fullname);


//PROMISES - is an operation which hasn't been completed yet
// they have 3 states in which they can be which are:
    // fufilled
    // rejected
    // pending

let prom = new Promise((resolve, reject)=>{
    let x = 2 + 5;
    if(x==8){
        resolve("Success");
    }else{
        reject("Failed");
    }
})

// try-catch-finally - handles any issues - if you catch an issue do something else
prom.then((message)=>{
    console.log(`Then block - status is: ${message}`);
}).catch((message)=>{
    console.log(`Catch block - status is: ${message}`);
    console.error(message);
}).then(()=>{
    console.log("Finally block - runs regardless");
})


// CLOSURES - data privacy

// Outer function - defined fname, intro
const fullName = (fname) => {
    let intro = "My name is";
    // inner function - defined s
    const lname = (s) => {
        return `${intro} ${fname} ${s}`;
    }
    return lname;
}

let first = fullName("James"); //fname
console.log(first); //fullName returns the lname arrow function

let second = first("Bond");
console.log(second); //actual values that the inner function has used