"use strict"

const chai = require("chai");
const chaiHttp = require("chai-http"); //http requests

chai.use(chaiHttp); //adds the http plugin

const server = require("./Routes/index"); //imports server so no need to remember ports

const { agentModel } = require("./Routes/db");

describe("agent tests", () => {
    
    let testAgent;

    beforeEach(async () => {
        try {
            await agentModel.deleteMany({});
            testAgent = await agentModel.create({
                name: "James",
                disposition: "Ego",
                agency: "MI6"
        });
        testAgent = JSON.parse(JSON.stringify(testAgent)); //strips out the mongoose additional data
        console.log();
    } catch(err) {
        console.error(err)
    }
});   
    
    it("should create a agent", (done) => {
        const newAgent = {
            "name": "Austion Powers", 
            "disposition": "Groovy", 
            "agency": "MI6" 
        }
        chai.request(server).post("/names/createAgent").send(newAgent).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newAgent);
            done(); //tells mocha the test has finished
        })    
    });

    it("should get a agent", (done) => {
        chai.request(server).get("/names/getAgent/" + testAgent._id).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testAgent);
            done(); // tells mocha the test has finished
        })
    });

    it("should get all agents", (done) => {
        chai.request(server).get("/names/getAllAgents").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testAgent);
            done(); // tells mocha the test has finished
        })
    });

    it("should delete the test agent", (done) => {
        chai.request(server).delete("/names/removeAgent/" + testAgent._id).end((err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.include(testAgent);
            // done(); //tells mocha the test has finished
        })
        chai.request(server).get("/names/getAllAgents").end((err, res) => { //check allAgents
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.not.include(testAgent); //Agent should not show
            done(); // tells mocha the test has finished
        })    
    });

    it("should update a agent", (done) => {
        // chai.request(server).patch("/names/updateAgent/" + testAgent._id + "?name=Mike Myers").end((err,res) => {
        chai.request(server).patch("/names/updateAgent/" + testAgent._id).query({name: "Mike Myers"}).end((err,res) => {   
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(testAgent);
            // done(); //tells mocha the test has finished
        })  
        chai.request(server).get("/names/getAgent/" + testAgent._id).end((err, res) => { //pull back the record to check name has changed
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.name).to.include("Mike Myers");
            done(); // tells mocha the test has finished
        })  
    });

});
