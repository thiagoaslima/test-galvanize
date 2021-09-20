import faker from "faker";

import { LoadProductController } from "./load-product";
import { LoadProduct } from "../../domain/usecases/load-product";
import { Product } from "../../domain/models/product";

const fakeProvider = (example: Partial<Product>): LoadProduct => ({
  // Use type assertion as we only need partials for the tests
  load: (productId: number) => {
    const response = example.id === productId ? example as Product : undefined
    
    return Promise.resolve(response);
  }
})

describe('LoadProductController', () => {
  test('should return 200 and the product with the same productId from the route', async () => {
    const product = { id: faker.datatype.number(), name: faker.commerce.productName() };
    const sut = new LoadProductController(fakeProvider(product));
    const response = await sut.handle({productId: product.id});
    
    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual(product);
  });
  
  test('should return 204 if no product with that id', async () => {
    const product = { id: 1, name: faker.commerce.productName() };
    const sut = new LoadProductController(fakeProvider(product));

    const request = { productId: 9999 };
    const response = await sut.handle(request);
    expect(response.statusCode).toBe(204);
    expect(response.data).toMatchInlineSnapshot(`
Object {
  "message": "No product with productId 9999 found",
}
`);
  });
});
