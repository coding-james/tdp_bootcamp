"use strict"

const express = require("express");
const app = express();

const routes = require("./names");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/names", routes); //without middleware
// Example for postman localhost:4494/names/allUsers

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// app.listen(4494);
const server = app.listen(4494, () => console.log(`Server successfully started on port, ${server.address().port}`));