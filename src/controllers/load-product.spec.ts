import { LoadProductController } from "./load-product";

describe('LoadProductController', () => {
  test('should return 200 and the product with the same productId from the route', () => {
    const sut = new LoadProductController();
    const request = { productId: 1 };
    const response = sut.handle(request);
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({ id: request.productId }));
  });
});
