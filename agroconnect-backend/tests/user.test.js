const request = require('supertest');
const app = require('../index'); // or wherever your Express app is exported

describe('GET /api', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBeDefined();
  });
});
