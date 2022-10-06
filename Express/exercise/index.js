"use strict"
const express = require("express");
const bodyParser = require("body-parser"); //required for post request

const app = express ();

app.use(express.json());
// app.use(logTime); //Don't need this

let names = ["James Bond", "Jason Bourne", "Austin Powers", "Ethan Hunt", "Dana Scully", "M"];

// Get Request
// app.get("/read", (req, res) => console.log("fetch"));
app.get('/', (req, res) => res.send("Hello, my name is Bond, James Bond"));

//Middleware - Logs Date and Time
const logTime = (req, res, next) => {
    console.log("Time stamp:", new Date());
    next();
}

// Get All Users
// in postman example - localhost:4494/allUsers
// includes prompt to run Middleware
app.get("/allUsers", logTime, (req, res) => res.send(names));

//Get a specific User by index using URL parameter
app.get("/User/:id", (req, res) => res.send(names[req.params.id]));

// Post Request
// app.post("/create", (req, res) => console.log("create"));
app.post('/create', (req, res) => {
    const newName = req.body.name;
    names.push(newName);
    res.status(201).send(`${newName} added successfully`);
});

// Post Request
// app.put("/replace", (req, res) => console.log("replace"));
//  in postman example - localhost:4494/replace/2?name=Jon
app.put('/replace/:id', (req, res) => {
    console.log("QUERY:", req.query);
    const newName = req.query.name;
    const oldName = names[req.params.id];
    names[req.params.id] = newName;
    res.status(202).send(`${oldName} successfully replaced with ${newName[req.params.id]}`);
});

// Patch Request
// app.patch("/update", (req, res) => console.log("update"));

// Delete Request
// app.delete("/delete/:id", (req, res) => console.log("delete:", req.params.id));
//in postman example - localhost:4494/delete/1
app.delete('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

const server = app.listen(4494, () => console.log(`Server successfully started on port ${server.address().port}`));