import { Currency } from "../models/currency";
import { NoContentResponse } from "../../controllers/types/http";
import { Product } from "../models/product";

export interface LoadProduct {
  load: (productId: number) => Promise<Product | null>;
}

export declare namespace LoadProduct {
  export type Input = { productId: number; }

  export type Response = Product | NoContentResponse;
}