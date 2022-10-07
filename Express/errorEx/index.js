"use strict"

const express = require("express");

const app = express();

let names = ["James Bond", "Jason Bourne", "Austin Powers", "Ethan Hunt", "Dana Scully", "M"];

app.get("/error", (req, res, next) => {
    const err = new Error("Congratulations, you caused an error!");
    next(err);
});

// Delete Request
//in postman example - localhost:4494/delete/20
app.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params;
    console.log("ID:", id);
    if (id > names.length) return next({ status: 404, message: `no agents found with id ${id}`});
    res.send(names.splice(req.params.id, 1));
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// app.listen(4494);
const server = app.listen(4494, () => console.log(`Server successfully started on port, ${server.address().port}`));