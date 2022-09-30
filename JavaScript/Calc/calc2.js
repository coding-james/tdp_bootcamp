"use strict"

const counter = document.getElementById("counter") //get the counter element

const ban1 = () => {
    counter.value = (counter.value) + 1;
    // history();
}

const cDown10 = () => {
    counter.value = parseInt(counter.value) - 10;
    history();
}

const cDown5 = () => {
    counter.value = parseInt(counter.value) - 5;
    history();
}

const cDown = () => {
    counter.value = parseInt(counter.value) - 1;
    history();
}

const cUp = () => {
    counter.value = parseInt(counter.value) + 1;
    history();
}

const cUp5 = () => {
    counter.value = parseInt(counter.value) + 5;
    history();
}

const cUp10 = () => {
    counter.value = parseInt(counter.value) + 10;
    history();
}

const cUp15 = () => {
    counter.value = parseInt(counter.value) + 15;
    history();
}

const cReset = () => {
    counter.value = 0;
    history();
}

const cHitch = () => {
    counter.value = 42;
    history();
}

// const cClearHist = () => {
//     counter.value = 0;
//     clearHist();
// }

// Add 3 buttons on either side


// Additional Extra - History of numbers
const history = () => {
const hist = document.createElement("p");
hist.innerText = counter.value;
const addToBody = document.body.appendChild(hist);
const output = document.getElementById("output")
output.prepend(document.body,appendChild(hist));
}

// const clearHist = () => {
//     const paras = document.querySelectorAll("p");
//         for(let p of paras){
//             p.remove;
//         }
// }