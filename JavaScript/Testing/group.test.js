"use strict"

const { doesNotMatch } = require("assert");
const { expect } = require("chai");

const reverseFactorial = require("./groupChallenge");

describe("Group Exercise Tests", () => {
    it("should 120 is 5!", () => {
        expect(reverseFactorial(120)).to.equal("5!");
    })

    it("should 140 is not a factorial", () => {
        expect(reverseFactorial(140)).to.equal("NONE");
    })
})

