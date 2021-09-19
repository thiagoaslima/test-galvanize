import { makeApp } from "../setup/app";

describe('Healthcheck route', () => {
  test('returns ok status', async () => {
    const app = makeApp()

    const response = await app.inject({
      method: 'GET',
      url: '/healthcheck'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      status: 'ok',
      time: expect.any(Number)
    });
  });
});
