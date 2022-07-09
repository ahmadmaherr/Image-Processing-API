const app = require('../index'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('Test endpoint responses', () => {
  it('return the valid endpoint', async (): Promise<void> => {
    // note:  use "/images" and not "http://localhost:3000/images"
    const response = await request.get(
      '/images/encenadaport?width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('return error 404 for wrong image name', async (): Promise<void> => {
    const response = await request.get('/images/dummyImg');
    expect(response.status).toBe(404);
  });
});