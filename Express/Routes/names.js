const router = require("express").Router();
// Router is a  - light yellow words are functions
const { agentModel } = require("./db");

// List
// let names = ["James Bond", "Jason Bourne", "Austin Powers", "Ethan Hunt", "Dana Scully", "M"];

// Get, Post, Patch, Delete... are the routes
// but router. rather than app.

router.get('/', (req, res) => res.send("Hello, my name is Bond, James Bond"));

// Middleware
const logTime = (req, res, next) => {
    console.log("Time stamp:", new Date());
    next();
}

// Get All users
// router.get("/allUsers", logTime, (req, res) => res.send(names));

// Mongoose Get All
router.get("/getAllAgents", (req, res) => agentModel.find({}).then(results => res.send(results)).catch(err => next(err)));

//Get a specific User by index using URL parameter
// router.get("/User/:id", (req, res) => res.send(names[req.params.id]));

router.get("/getAgent/:id", (req, res, next) => {
    const {id} = req.params;
    if (!agents[id]) return next("No agent there");
    res.send(agents[id])
    agentModel.findById(id).then(result => res.send(result)).catch(err => next(err));
});

// Delete a User
// router.delete('/delete/:id', (req, res) => {
//     res.send(names.splice(req.params.id, 1));
// });

//in postman example - localhost:4494/delete/20
// router.delete('/delete/:id', (req, res, next) => {
//     const {id} = req.params;
//     console.log("ID:", id);
//     if (id > names.length) return next({ status: 404, message: `no agents found with id ${id}`});
//     res.send(names.splice(req.params.id, 1));
// });

router.delete("/removeAgent/:id", (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    agentModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

// Create a User
// router.post('/create', (req, res) => {
//     const newName = req.body.name;
//     names.push(newName);
//     res.status(201).send(`${newName} added successfully`);
// });

router.post("/createAgent", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    agentModel.create(req.body).then(result => res.status(201).send(result)).catch(err => next(err));
});

// Replace a User
//  in postman example - localhost:4494/replace/2?name=Jon
// router.put('/replace/:id', (req, res) => {
//     console.log("QUERY:", req.query);
//     const newName = req.query.name;
//     const oldName = names[req.params.id];
//     names[req.params.id] = newName;
//     res.status(202).send(`${oldName} successfully replaced with ${newName[req.params.id]}`);
// });

//  in postman example - localhost:4494/names/updateAgent/
router.patch("/updateAgent/:id", (req, res) => {
    console.log("ID:", req.params.id);
    if (!req.params.id) return next({ status: 400, message: "Missing ID"})
    agentModel.findByIdAndUpdate(req.params.id, { $set: { name: req.params.name }}).then(result => res.status(201).send(result)).catch(err => next(err));
});



module.exports = router;