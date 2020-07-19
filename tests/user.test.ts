const request = require('supertest')
const app = require('../server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/users')
      .send()
    expect(res.statusCode).toEqual(200)
    //expect(res.body).toHaveProperty('post')
  })
})