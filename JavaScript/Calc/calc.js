"use strict"

// Add - as a standard function
function add(n1,n2) {
    let sum = n1 + n2;
    console.log(sum);
}

add(30,12);


// Subtract - as an expression function
const subtract = function(n1, n2) {
    let sum = n1 - n2;
    console.log(sum);
}

subtract(28,12);


// Multiply - as an Arrow Function
const multiply = (n1,n2) => console.log((n1 * n2));

multiply(5,10);


// Divide - as an Arrow Function
const divide = (n1,n2) => console.log((n1 / n2));

divide(5,10);