"use strict"

const { expect } = require("chai");

const doggoResults = require("./doggoChallenge");

describe("doggo tests", () => {
    it("should have a length of 99", () => {
        expect(doggoResults(44).length).to.equal(99);
    });

    it("should not contain 50th", () => {
        expect(doggoResults(50)).to.not.include("50th");
    });

    it("should have 11th", () => {
        expect(doggoResults(35)).to.include("11th");
    });
    
    it("should have 12th", () => {
        expect(doggoResults(35)).to.include("12th");
    });

    it("should have 13th", () => {
        expect(doggoResults(35)).to.include("13th");
    });

    it("should end in nd", () => {
        expect(doggoResults(11)).to.include("22nd");
    });

    it("should end in rd", () => {
        expect(doggoResults(11)).to.include("33rd");
    });

    it("should end in st", () => {
        expect(doggoResults(11)).to.include("41st");

    });
});