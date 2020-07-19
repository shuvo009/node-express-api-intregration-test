const app = require("../../src/server");
import request from "supertest"
import databaseConnect from "../../src/dataLayer/databaseConnect";
import userSchema from "../../src/dataLayer/userSchema";

describe('Get /users', () => {

  beforeAll(async () => {
    const connectionString = process.env.MONGO_URL;
    await databaseConnect(connectionString);
  });

  beforeEach(async () => {
    const user = [
      { email: "email1@gmail.com", firstName: "user first name1", lastName: "user last name1" },
      { email: "email2@gmail.com", firstName: "user first name2", lastName: "user last name2" },
    ];
    await userSchema.remove({});
    await userSchema.insertMany(user);
  });

  it('should get two user', async () => {
    const res = await request(app)
      .get('/users');

    expect(res.status).toEqual(200);
    expect(res.body.length).toEqual(2);
  })
})


describe('Post /create', () => {

  beforeAll(async () => {
    const connectionString = process.env.MONGO_URL;
    await databaseConnect(connectionString);
  });

  beforeEach(async () => {
    await userSchema.remove({});
  });


  it('should create a user', async () => {
    const data = { email: "email2@gmail.com", firstName: "user first name2", lastName: "user last name2" };
    const res = await request(app)
      .post('/create')
      .send(data);

    expect(res.status).toEqual(200);

    const listRes = await request(app)
      .get('/users');

    expect(listRes.body.length).toEqual(1);
  })
})