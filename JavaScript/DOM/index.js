"use strict"
//DOM MANIPULATION

//Create a h1 element / tag
const title = document.createElement("h1"); //creating a h1 tag
title.innerText = "Let's manipulate the DOM"; //adding the text between the h1 tags
document.body.appendChild(title); //the h1 tag is going in the body tag

//Create a variable which refers to to a specified ID on the HTML page
const div = document.getElementById("myDiv"); //finding an element with the specified id
console.log("target div", div); //prints details of the tag

//Create a button
const newButton = document.createElement("button"); //creates a button element
newButton.innerText = "Press Me"; //adds text to the button
div.prepend(newButton); //adds the button to the the div we selected earlier

//Selecting a element without an ID
const secondDiv = document.querySelector("body > div.divNoId"); //used when element id is not present
console.log(secondDiv);

const para = document.querySelector("body > div.divNoId > p")
para.innerText = "hello";

// Event handling
const greet = () => console.log("Hello World!"); //creates greet function
newButton.oneclick = greet; //runs greet when neButton is clicked
newButton.addEventListener("click",greet); //as above, but a different way of doing it