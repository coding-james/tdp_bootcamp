"use strict"

//EXERCISE - Ash Axios to Fetch Data

const URL = "https://reqres.in/api/users";

// //fetch GET request from specified URL - old method
// fetch(URL)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data);
//     })
//     .catch(function (err){
//         console.error();
//     })

// Get data via Axios
axios.get(URL)
.then(response => console.log("Axios Data", response.data.data))
.catch(err => console.error(err));

axios.get(URL)
.then(response => appendData(response.data.data))//second .data is to allow it to get in the next set of brackets
.catch(err => console.error(err));
    
//Displaying data on the webpage
// For each item in the data list, create a divm then card and p with the details
function appendData(data){
    let dataList = document.getElementById("myData");
    for(let i = 0; i<data.length; i++){
        
        let trainer = document.createElement("div"); //create div
        
        let id = document.createElement("card"); //create card with id
        id.innerText = "ID: " + data[i].id;
        trainer.appendChild(id);

        let name = document.createElement("p"); //create p with first name
        name.innerText = "Name: " + data[i].first_name;
        trainer.appendChild(name);

        let lastName = document.createElement("p"); //create p with last name
        lastName.innerText = "Surname: " + data[i].last_name;
        trainer.appendChild(lastName);
        
        let email = document.createElement("p"); //create p with email
        email.innerText = "Email: " + data[i].email;
        trainer.appendChild(email);

        let image = document.createElement("img"); //create img with avatar
        image.src = data[i].avatar;
        trainer.appendChild(image);

        dataList.appendChild(trainer);
   }
}

// Exercise (QA Community) 1
// Exercise 1.1 GET request for List User

fetch("https://reqres.in/api/users?page=2")
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log("Fetch Users List:", data.data);
    })
    .catch(function (err){
        console.error();
    })

// As above but through Axios
function withAxios(){
    axios.get("https://reqres.in/api/users")
    .then(response => console.log("Axios User List:", response.data.data))
    .catch(err => console.error(err));
}

// Exercise 1.2  - Get User 2
fetch("https://reqres.in/api/users/2")
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log("Fecth User 2:", data.data);
    })
    .catch(function (err){
        console.error();
    })

// As above but through Axios
function withAxiosUser2(){
    axios.get("https://reqres.in/api/users/2")
    .then(response => console.log("Axios User 2:", response.data.data))
    .catch(err => console.error(err));
}


// Exercise 1.3 Create a User name of Morpheus and job of Leader


// Axios
const newUser = {
    name: "Morpheus",
    job: "Leader"
}

axios.post("https://reqres.in/api/users", newUser)
.then(response => console.log("Create User:", response.data.data))
.catch(err => console.error(err));

console.log("New User", newUser);


// Exercise 1.4 Post request for "Register - Successful"
const regSuccess = {
    email: "eve.holt@reqres.in",
    password: "pistol"
}

axios.post("https://reqres.in/api/register", regSuccess)
.then(response => console.log("Register Successful:", response.data.data))
.catch(err => console.error(err));

console.log("regSuccess", regSuccess);



// Exercise 1.5 Post request for "Login - Successful"
const loginSuccess = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

axios.post("https://reqres.in/api/login", loginSuccess)
.then(response => console.log("Login Successful:", response.data.data))
.catch(err => console.error(err));

console.log("loginSuccess", loginSuccess);