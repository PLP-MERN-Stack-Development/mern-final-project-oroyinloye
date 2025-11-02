const request = require('supertest');

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

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth'); // ✅ adjust if needed

app.use(express.json());
app.use('/api/auth', authRoutes);

module.exports = app; // ✅ export the app for testing

