const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const routeDir = require('../app')

// Configure chai
chai.use(chaiHttp);
chai.should();


describe("All Operations on Event", () => {

    beforeAll(async () => {
        mongoose.Promise = global.Promise
        await mongoose.connect(
            `mongodb+srv://fortunecode:fortunecode@safeboda-e9haz.mongodb.net/test?retryWrites=true`, {
                useNewUrlParser: true
            }
        );
    });

    afterAll(async () => {
        mongoose.Promise = global.Promise
        await mongoose.connection.close();
    });

    // Test to create event
    it("should create event ", async (done) => {
        const res = await chai.request(routeDir)
            .post('/api/v1.0/event/')
            .send({
                "name": "Monthly GoLang Summit",
	            "location": "meltwater incubator"
            })
            expect(res).to.have.status(201).to.be.a('object')
            done()
    });
});
