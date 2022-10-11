const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_films_db", {
    useNewUrlParser: true
}).then(() => console.log("Connected to Films MongoDB")).catch(err => console.error(err));

// Make a new schema
const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    year: {
        type: Number
    },
    category: {
        type: String
    },
    actors: [
        {
            actorName: {
                type: String
            }
        }
    ]
});

const filmModel = mongoose.model("film", filmSchema); //object with att the mongo functions - you use this to interact with the collection
// When creating it automatically plural version of the name e.g. duck becomes ducks

module.exports = {
    filmModel
};