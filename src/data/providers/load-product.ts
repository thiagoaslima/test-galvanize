import { LoadProduct } from "../../domain/usecases/load-product";
import { LoadProductRepository } from "../protocols/load-product-repository";

export class DbLoadProductProvider implements LoadProduct {
  constructor(private repository: LoadProductRepository) { }

  async load(productId: number) {
    const product = await this.repository.find(productId);

    if (!product) {
      return null;
    }

    return product;
  }
}