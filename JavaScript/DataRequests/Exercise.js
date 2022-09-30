"use strict"

const URL = "https://reqres.in/api/users";
// const URL = "./Exerise.json";
// const URL2 = "./trainers.json";

// //fetch GET request from specified URL
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

axios.get(URL)
.then(response => console.log(response.data.data))
.catch(err => console.error(err));

// axios.get(URL2)
// .then(response => console.log(response.data))
// .catch(err => console.error(err));

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




// //Displaying data on the webpage
// // For each item in the data list, create a divm then card and p with the details
// function appendData(data){
//     let dataList = document.getElementById("myData");
//     for(let i = 0; i<data.length; i++){
//         let trainer = document.createElement("div");
//         let id = document.createElement("card");
//         id.innerText = "ID: " + data[i].userId;
//         trainer.appendChild(id);
//         let name = document.createElement("p");
//         name.innerText = "Name: " + data[i].name;
//         trainer.appendChild(name);
//         dataList.appendChild(trainer);
//     }
// }