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
