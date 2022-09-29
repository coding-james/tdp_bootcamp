"use strict"

//Exercise 1 - Write a function that creates a new h1 element, adds text to that element and then adds the h1 to the document on load of the HTML page.
const title = document.createElement("h1");
title.innerText = "Here is a Header added via JavaScript";
document.body.appendChild(title);

//Exercise 2 - Create a HTML document that applies the basic JavaScript methods to access and manipulate the DOM.

//2.1 - Query Selector
let firstPara = document.querySelector("p");
firstPara.style.color = "blue";

//2.2 querySelectorAll
let paras = document.querySelectorAll("p");
for(let p of paras){
    p.style.fontFamily = "Tahoma";
}

// 2.3 addEventListener
const getOff = () => console.log("I said don't press me");

let btn = document.querySelector("button"); //select first button
btn.addEventListener("click", getOff);

//2.4 createElement and 2.5 appendChild
let newP = document.createElement("p");
newP.innerText = "Hey you added a new paragraph";
document.body.appendChild(newP);

//2.6 removeChild
// newP.removeChild();

//2.7 replaceChild
// firstPara.replaceChild();

// 2.8 setAttribute
let div = document.querySelector("div");
div.setAttribute("contenteditable","")

// 2.9 getAttribute
// alert(div.getAttribute("id")); //returned the value of the attribute, in this case div1

// 2.10 removeAttribute


// Exercise 3 from Ash
// 3.1 Create a function that creates a paragraph tag
const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "paraID"; //id for para
    newPara.innerText = "This is a new paragraph" //text for para
    document.body.appendChild(newPara); //add in para
}

makePara();

// Create another function that changes the text of that paragraph tag to what is in a textbox
const changePara = () => {
    const existingPara = document.getElementById("paraID"); //get the para and its content
    // console.log(existingPara);
    let textBox = document.getElementById("paraText").value; //get the textbox and then its value
    existingPara.innerText = textBox; //add text from textBox to para with id paraId
}

btn.addEventListener("click", changePara);


// Create another function that deletes the paragraph tag
const delPara = () => {
    const existPara = document.getElementById("paraID"); //get the para and its content
    existPara.remove();
}

let btnDel = document.getElementById("buttonDel"); //select button from id
btnDel.addEventListener("click", delPara);