"use strict"

// FizzBuzz
    // create a program that prints each number 1 to 100 on a new line
    // For each multiple of 3, print "Fizz" instead of the number
    // For each multiple of 5, print "Buzz" instead of the number
    // For numbers which are multiples of both 3 and 5, print "FizzBuzz instead"

    // Use a for loop
    // then either a switch case or if / else if / else statement
 

// As a Switch Case


let i = 1;

for(let i = 1; i <= 100; i++) {
    switch(true) {
        case ((i % 3) == 0) && ((i % 5) == 0):
            console.log("FizzBuzz");
            break;
        case ((i % 3) == 0):
            console.log("Fizz");
            break;
        case ((i % 5) == 0):
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
    
}



// As if / else if / else

for (let i =1; i <=100; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz");
    } else if ((i % 3) == 0) {
        console.log("Fizz");
    } else if ((i % 5) == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}