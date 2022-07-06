const app = require('../index');
const supertest = require('supertest');

const request = supertest(app);

describe('Test endpoint response', () => {
  it('should return Error 404 for choosing a wrong name', async function () {
    const res = await request.get('localhost:3000/images/anyImage');
    expect(res.status).toBe(404);
  });

  it('should get the valid response', async function () {
    const res = await request.get('localhost:3000/images/fjord');
    console.log(res);
    expect(res.status).toBe(200);
  });
});
