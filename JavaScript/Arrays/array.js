const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(nums);

//normal for loop
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
}

//Enhanced loop
// of for the values, in for the keys / index
for (let num of nums) {
    console.log(num);
}


// forEach shorter way to do
nums.forEach(num => console.log(num));

//Filter
const even = nums.filter(num => num % 2 === 0);
console.log(even);
console.log(nums);

//Map - converts to something eles
const squared = nums.map(num => num ** 2);
console.log(squared);

//Reduce - use a calc
//accumulator = running total - but its a parameter so can call it anything
// next = next number in the array
const sum = nums.reduce((accumulator, next) => accumulator + next);
console.log(sum);