"use strict"

let grades = [
    {name: "John", grade: 8, sex: "M"},
    {name: "Sarah", grade: 12, sex: "F"},
    {name: "Bob", grade: 16, sex: "M"},
    {name: "Johnny", grade: 2, sex: "M"},
    {name: "Cyrus", grade: 4, sex: "M"},
    {name: "Paula", grade: 18, sex: "F"},
    {name: "Jeff", grade: 5, sex: "M"},
    {name: "Jennifer", grade: 13, sex: "F"},
    {name: "Courtney", grade: 15, sex: "F"},
    {name: "Jane", grade: 9, sex: "F"}
]

//Filter grades by gender
let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

//Avg Grades
let average = grades => (grade.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

// Max and Min Grades
let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

//Highest Grade
console.log(maxGrade(grades));

//Lowest Grade
console.log(minGrade(grades));

//Highest Grade of Boys
console.log(maxGrade(getBoys(grades)));

//Highest Grade of Girls
console.log(maxGrade(getGirls(grades)));

//Highest Grade of Boys
console.log(minGrade(getBoys(grades)));

//Highest Grade of Girls
console.log(minGrade(getGirls(grades)));