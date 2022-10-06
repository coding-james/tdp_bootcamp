"use strict"
const express = require("express");
const bodyParser = require("body-parser");

const app = express ();

app.use(express.json());

let names = ["James Bond", "Jason Bourne", "Austin Powers", "Ethan Hunt"];

// Get Request
// app.get("/read", (req, res) => console.log("fetch"));
app.get('/', (req, res) => res.send("Hello, my name is Bond, James Bond"));

// Get All Users
app.get("/allUsers", (req, res) => res.send(names));

//Get a specific User by index using URL parameter
app.get("/User/:id", (req, res) => res.send(names[req.params.id]));

// Post Request
// app.post("/create", (req, res) => console.log("create"));
app.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

// Post Request
// app.put("/replace", (req, res) => console.log("replace"));
app.put('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

// Patch Request
// app.patch("/update", (req, res) => console.log("update"));

// Delete Request
// app.delete("/delete/:id", (req, res) => console.log("delete:", req.params.id));
app.delete('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

const server = app.listen(4494, () => console.log(`Server successfully started on port ${server.address().port}`));