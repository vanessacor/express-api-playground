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

describe("index", () => {
  describe("GET /", () => {
    it("it should return homepage", async () => {
      const res = await chai.request(app).get("/");

      expect(res).to.be.json;
      expect(res).to.have.status(200);
      expect(res.body).to.be.an("object");
      expect(res.body.api).to.include("play");
    });
  });
});