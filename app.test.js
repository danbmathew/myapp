//Test for endpoint functionality

const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("Testing Endpoint", function(){
  it("A success is expected", async function(){
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  })
})
