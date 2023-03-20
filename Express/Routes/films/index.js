"use strict"

const express = require("express");
const app = express();

const routes = require("./filmRoutes");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/filmRoutes", routes); //without middleware
// Example for postman localhost:4494/filmRoutes/allUsers

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// app.listen(4494);
const server = app.listen(4494, () => console.log(`Server successfully started on port, ${server.address().port}`));