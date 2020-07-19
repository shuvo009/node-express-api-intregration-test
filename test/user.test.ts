const request = require('supertest')
const app = require('../server')
const mongoose = require('mongoose');

describe('Post Endpoints', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true }, () => {
      console.log("aaaa");
    });
  });


  it('should create a new post', async () => {
    const res = await request(app)
      .get('/users')
      .send()
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('post')
  })
})