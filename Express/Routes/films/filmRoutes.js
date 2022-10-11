const router = require("express").Router();
// Router is a  - light yellow words are functions
const { filmModel } = require("./filmdb");

router.get('/', (req, res) => res.send("Hello, my name is Bond, James Bond"));

// Middleware
const logTime = (req, res, next) => {
    console.log("Time stamp:", new Date());
    next();
}


// Mongoose Get All
router.get("/getAllFilms", (req, res) => filmModel.find({}).then(results => res.send(results)).catch(err => next(err)));

//Get a specific User by index using URL parameter
// router.get("/User/:id", (req, res) => res.send(routes[req.params.id]));
router.get("/getFilm/:id", (req, res, next) => {
    console.log("ID:", req.params.id);
    if (!req.params.id) return next({ status: 400, message: "Missing ID"})
    filmModel.findById(req.params.id).then(result => res.send(result)).catch(err => next(err));
});

// Delete a User
router.delete("/removeFilm/:id", (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    filmModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});

// Create a User
router.post("/createFilm", (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    filmModel.create(req.body).then(result => res.status(201).send(result)).catch(err => next(err));
});

// Replace a User

// Using a query
//  in postman example - localhost:4494/routes/updatefilm/
router.patch("/updateFilm/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("Name:", req.query.name);
    if (!req.params.id) return next({ status: 400, message: "Missing ID"})
    filmModel.findByIdAndUpdate(req.params.id, { $set: { name: req.query.name }}).then(result => res.status(201).send(result)).catch(err => next(err));
});

// Using the body
router.patch("/updateFilmBody/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("Name:", req.body.name);
    if (!req.params.id) return next({ status: 400, message: "Missing ID"})
    filmModel.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }}).then(result => res.status(201).send(result)).catch(err => next(err));
});


module.exports = router;