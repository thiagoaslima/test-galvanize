import { Currency } from "../../domain/models/currency";
import { Product } from "../../domain/models/product"

export type ProductModel = {
  id: number;
  name: string;
  price: number;
}

const toCents = (price: number): number => {
  return Math.round(price * 100);
}
 
export const ProductModel = {
  convert(model: ProductModel): Product {
    return {
      id: model.id,
      name: model.name,
      price: {
        valueCents: toCents(model.price),
        currency: Currency.USD
      }
    }
  }
}