"use strict"


const reverseFactorial = (startNum) => {
    let total = startNum;

    // For loop
    for (let divideBy = 2; divideBy <= startNum; divideBy++) {
        // console.log(`${total} / ${divideBy} = `, total / divideBy);
        total /= divideBy;

        if (total === 1) {
            // console.log(`${divideBy}! is ${startNum}`);
            return divideBy + "!";
        } else if (!Number.isInteger(total)) {
            return "NONE";
        }
    }
}

console.log(reverseFactorial(120));

// WHILE LOOP
// const rf2 = (total) => {
//     let divideBy = 1;

//     while (total > 1) {
//         divideBy++;
//         total /= divideBy;
//         if (!Number.isInteger(total)) {
//             return "NONE";
//         }
//     }

//     return divideBy + "!";
// }

// console.log(rf2(120));