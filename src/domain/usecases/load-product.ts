import { Currency } from "../models/currency";
import { NoContentResponse } from "../../controllers/types/http";
import { Product } from "../models/product";

export interface LoadProduct {
  load: (productId: number) => Promise<Product | undefined>;
}

export declare namespace LoadProduct {
  export type Input = {
    productId: number; 
    currency?: Currency;
  }

  export type Response = Product | NoContentResponse;
}