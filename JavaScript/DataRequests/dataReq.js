"use strict"

const URL = "./trainers.json";
const URL2 = "https://pokeapi.co/api/v2/pokemon/ditto";

//fetch GET request from specified URL
fetch(URL2)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
    .catch(function (err){
        console.error();
    })

//As less data in trainers it returned quicker
// axios.get(URL)
// .then(response => console.log(response.data))
// .catch(err => console.error(err));

axios.get(URL)
.then(response => appendData(response.data))
.catch(err => console.error(err));

//Displaying data on the webpage
// For each item in the data list, create a divm then card and p with the details
function appendData(data){
    let dataList = document.getElementById("myData");
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID: " + data[i].userId;
        trainer.appendChild(id);
        let name = document.createElement("p");
        name.innerText = "Name: " + data[i].name;
        trainer.appendChild(name);
        dataList.appendChild(trainer);
    }
}

