const doggoResults = (place) => {
    let results = [];

    for(let i = 1; i<101; i++) {
        if (place !== i) {
            if (i >= 11 && i <= 13) { //between 11 to 13 = th
                results.push(`${i}th`);
            } else if (i % 10 === 1) { //ends in 1 = st 
                results.push(`${i}st`);
            } else if (i % 10 === 2){ //ends in 2 = nd
                results.push(`${i}nd`);
            } else if (i % 10 === 3){ //ends in 3 = rd
                results.push(`${i}rd`);
            } else { //everything else end in th
                results.push(`${i}th`);
            }
        } 
    }
    // console.log("Your place: ", place);
    // console.log(results);
    return results;
}

module.exports = doggoResults;
// doggoResults(1);




