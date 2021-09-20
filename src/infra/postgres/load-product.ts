import { LoadProductRepository } from "../../data/protocols/load-product-repository";
import { Product } from "../../domain/models/product";
import { ProductModel } from "../models/product";
import { postgresHelper } from "./postgres-helper";

export class PostgresProductRepository implements LoadProductRepository {
  async find(productId: number): Promise<Product | undefined> {
    try {
      const response = await postgresHelper.client?.query<ProductModel>({
        name: 'find-product-by-id',
        text: 'SELECT * FROM products WHERE id = $1',
        values: [productId]
      });

      const model = response?.rows[0];

      return model ? ProductModel.convert(model) : undefined;
    } catch (err) {
      console.error(err);
    }
  }
}