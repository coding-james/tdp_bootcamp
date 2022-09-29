"use strict"

//prompt for number 1
//prompt operator
//prompt for number 2
//calc on equals
//create function to clear

const calc = (n1, n2, operator) => {

    switch(operator){
        case "Add":
            console.log(n1 + n2);
            break;
        case "Subtract":
            console.log(n1 - n2);
            break;
        case "Multiply":
            console.log(n1 * n2);
            break;
        case "Divide":
            console.log(n1 / n2);
            break;
        default:
            console.log(0)
    }
}

const cScreen = document.getElementById("calcScreen") //get the counter element

const b_1 = () => {
    cScreen.value = 1;
}

const b_2 = () => {
    cScreen.value = 2;
}

const b_3 = () => {
    cScreen.value = 3;
}