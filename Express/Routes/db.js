const mongoose = require("mongoose");

mongoose.connect("mongodb:://localhost:27017/tdp_db", {
    useNewUrlParser: true
});

// Make a new schema
const duckSchema = new mongoose.Schema({
    disposition: {
        type: String,
        require: true
    },
    colour: {
        type: String
    },
    name: {
        type: String,
        require: true
    }
});

const duckModel = mongoose.model("duck", duckSchema); //object with att the mongo functions - you use this to interact with the collection
// When creating it automatically plural version of the name e.g. duck becomes ducks

module.exports = {
    duckModel
};