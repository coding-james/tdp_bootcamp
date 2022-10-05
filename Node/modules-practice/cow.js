const cows = require("cowsay");

module.exports.speak = (text) => cows.say({"text" : text});

module.exports.think = (text) => cows.say({
    "text": text,
    "e": "oO",
    "T": "U"
});

module.exports.zombie = (text) => cows.say({
    "text": text,
    "e": "XX",
    "modes": "d"
});

module.exports.sleep = (text) => cows.say({
    "text": text,
    "e": "--",
});

module.exports.random = (text) => cows.say({
    "text": text,
    "e": "--",
    "r": "True",
});

module.exports.darkside = (text) => cows.say({"text" : text, "f": "vader"})