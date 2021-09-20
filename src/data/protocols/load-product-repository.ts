import { Product } from "../../domain/models/product";

export interface LoadProductRepository {
  find: (productId: number) => Promise<Product | undefined>
}
