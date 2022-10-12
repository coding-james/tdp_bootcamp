"use strict"

const chai = require("chai");
const chaiHttp = require("chai-http"); //http requests

chai.use(chaiHttp); //adds the http plugin

const server = require("./Routes/index"); //imports server so no need to remember ports

describe("agent tests", () => {
    it("should create a agent", (done) => {
        const newAgent = {
            "name": "Austion Powers", 
            "disposition": "Groovy", 
            "agency": "M16" 
        }
        chai.request(server).post("/names/createAgent").send(newAgent).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newAgent);
            done(); //tells mocha the test has finished
        })    
    })
});
