import { Currency } from "../domain/models/currency";
import { LoadProduct } from "../domain/usecases/load-product";

export class DbLoadProductProvider implements LoadProduct {
  load(productId: number) {
    return Promise.resolve({
      id: productId,
      name: 'Product',
      price: {
        valueCents: 100,
        currency: Currency.USD
      }
    })
  }
}