import { makeApp } from "../setup/app";

const app = makeApp()

describe('Product routes', () => {

  describe('/product/:productId', () => {

    it('should return the product with id = 1', async () => {
      const response = await app.inject({
        method: 'GET',
        url: '/product/1'
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual(expect.objectContaining({
        id: 1
      }));
    });

  });
});
