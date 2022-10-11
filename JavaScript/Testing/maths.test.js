const {sum} = require("./maths");
const { expect } = require("chai");
// don't need to import mocha as it's running the file

describe("maths tests", () => { //set of tests
    it("should equal 2", () => { //single test
        expect(sum(1,1)).to.equal(2);
    })
    it("should fail", () => {
        expect(sum(1, 1)).to.equal(3);
    })
});