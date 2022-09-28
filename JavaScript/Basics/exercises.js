"use strict"

// EXERCISE 1 - Destructuring
let user = {
    name: "John",
    years: 30
};

console.log(user);

// let {name, years: age, isAdmin = false} = user;
// alert( name );
// alert( age );
// alert( isAdmin );


// EXERCISE 2 - Scope

// Exercise 2.1
let x = "foo";
console.log(x);

if(x == "foo"){
    let y = "ufo";
    console.log("FOO Fighters");
    console.log("in scope: ", y)
} else {
    console.log("Not Foo");
};

console.log(x); // "Foo"
// console.log(y); //"Reference Error"

// Exercise 2.2
let a = 3; //added declaration

function doSomething() {
    console.log(a);
    console.log(foo());
    //let a = 1; //must declare before
    function foo() {
        return 2;
    }
}
doSomething();


// EXERCISE 3 - Functions, Expressions and Arrows

// Exercise 3.1 - create a function which takes 2 parameters and substracts the two numbers.
function myCalc(a, b){
    let sum = a - b;
    console.log(a, "-", b, "=",sum)
}

myCalc(10,5);


// Exercise 3.2 - Create a function expression called Welcome, that take in name, age, gender as parameters.
// The outcome should be similar to "My name is Felix, I am 20 years old and of gender Male"
const welcome = function(name, age, gender){
    console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
    console.log("My name is",name,"I am",age,"years old and of gender",gender);
}

welcome("Elliot", 30, "Male");


// Exercise 3.3 - Create a arrow function called powerUp that takes two values. The function will return the power of the two numbers
const powerUp = (n1,n2) => console.log(Math.pow(n1,n2));
powerUp(2,3);