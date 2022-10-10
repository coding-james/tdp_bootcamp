const router = require("express").Router();
// Router is a  - light yellow words are functions

// List
let names = ["James Bond", "Jason Bourne", "Austin Powers", "Ethan Hunt", "Dana Scully", "M"];

// Get, Post, Patch, Delete... are the routes
// but router. rather than app.

router.get('/', (req, res) => res.send("Hello, my name is Bond, James Bond"));

// Middleware
const logTime = (req, res, next) => {
    console.log("Time stamp:", new Date());
    next();
}

// Get All users
router.get("/allUsers", logTime, (req, res) => res.send(names));

//Get a specific User by index using URL parameter
router.get("/User/:id", (req, res) => res.send(names[req.params.id]));

// Delete a User
// router.delete('/delete/:id', (req, res) => {
//     res.send(names.splice(req.params.id, 1));
// });

//in postman example - localhost:4494/delete/20
router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params;
    console.log("ID:", id);
    if (id > names.length) return next({ status: 404, message: `no agents found with id ${id}`});
    res.send(names.splice(req.params.id, 1));
});

// Create a User
router.post('/create', (req, res) => {
    const newName = req.body.name;
    names.push(newName);
    res.status(201).send(`${newName} added successfully`);
});

// Replace a User
//  in postman example - localhost:4494/replace/2?name=Jon
router.put('/replace/:id', (req, res) => {
    console.log("QUERY:", req.query);
    const newName = req.query.name;
    const oldName = names[req.params.id];
    names[req.params.id] = newName;
    res.status(202).send(`${oldName} successfully replaced with ${newName[req.params.id]}`);
});

module.exports = router;