const request = require('supertest');
const app = require('../server');

describe('POST /api/auth/register', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Richard',
      email: 'richard@example.com',
      password: 'securepass',
      role: 'farmer'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });
});
const request = require('supertest');
const app = require('../index');

describe('POST /login', () => {
  it('should fail with wrong credentials', async () => {
    const res = await request(app).post('/api/login').send({
      email: 'wrong@example.com',
      password: 'wrongpass'
    });
    expect(res.statusCode).toBe(401);
  });
});