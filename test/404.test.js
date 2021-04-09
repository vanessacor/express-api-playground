const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;
chai.use(chaiHttp);

const createApp = require("../src/app.js");

const consoleMock = {
  log: () => undefined,
  error: () => undefined,
};

const app = createApp(consoleMock);

describe("error handlers", () => {
    describe("when the request resource does no exist", () => {
      it("should return 404 error", async () => {
        const res = await chai.request(app).get("/asdasd");
  
        expect(res).to.be.json;
        expect(res).to.have.status(404);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.include("not found");
      });
    });
})

