"use strict"

const counter = document.getElementById("counter") //get the counter element

const b1 = () => {
    counter.value = (counter.value) + "1";
    console.log("1");
}


const b2 = () => {
    counter.value = (counter.value) + "2";
    console.log("2");
}

const b3 = () => {
    counter.value = (counter.value) + "3";
    console.log("3");
}

//prompt for number 1
//prompt operator
//prompt for number 2
//calc on equals
//create function to clear

//AddEventListener
// const btnValue = () => console.log();

// let btn = document.querySelectorAll("button"); //select all button
// btn.addEventListener("click", btnValue);

// const calc = (n1, n2, operator) => {

//     switch(operator){
//         case "Add":
//             console.log(n1 + n2);
//             break;
//         case "Subtract":
//             console.log(n1 - n2);
//             break;
//         case "Multiply":
//             console.log(n1 * n2);
//             break;
//         case "Divide":
//             console.log(n1 / n2);
//             break;
//         default:
//             console.log(0)
//     }
// }