"use strict"

// EXERCISE - Closures

// Exercise 1.1
// let userName = (middle) => {
//     let prefix = "Username is";
//     let user2 = (last) => {
//         return `${prefix} ${middle} ${last}`;
//     }

//     return user2;
// }

// let m = userName("James");
// console.log(m); 

// let l = m("Bond");
// console.log(l);


let multiply = (x) =>{
return (y) => {
    return x * y;
};
}

let multi2 = multiply(2);
console.log(multi2(20));
let multi5 = multiply(5);
console.log(multi5(5));


// Exercise 1.2 - Create a Person function using getters and setters for the property first name.

// let person = () =>{
//     let name = "Daniel";
//     return {
//         getP: function () {
//             return name;
//         },
//         setP: function (newName) {
//             person = newName
//         },
//     };
// }

// let p = person();
// // let returnP = p.getP();
// // console.log(`The person is ${returnP}`); //Daniel
// console.log(p.getP());
// p.setP("Craig");
// // returnP = p.getP();
// // console.log(`The person is not ${returnP}`);
// console.log(p.getP());

let person = () => {
    let name = "Billy";
    return {
      getName: function () {
        return name;
      },
      setName: function (newName) {
        name = newName;
      },
    };
  }
  let personA = person();
  console.log(personA.getName());
  personA.setName("Craig");
  console.log(personA.getName());


// Exercise 1.3 - Create a function that increases and decreases the value of a counter through the use of functions and closures.

 let changeCount = () => {
   let counter = 0;
   return {
     increment: function () {
       counter += 1;
     },
     decrement: function () {
       counter -= 1;
     },
     value: function () {
       return counter;
     },
   };
 }
 let count = changeCount();
 console.log(count.value()); // 0
 count.increment();
 count.increment();
 console.log(count.value()); // 2
 count.decrement();
 console.log(count.value()); // 1


//  EXERCISE - Callbacks and Promises

// Exercise 2.1 - Create a callback that asks the user for a value, then increase by 10 through anoter function

const answer = (n1) => {
    alert(`Your new number is ${n1+10}`);
}

const calc = (callback) => {
    let number1 = parseInt(prompt(`Please enter a number.`));
    callback(number1);
}

calc(answer);