import { ExchangeConversion } from "../../domain/models/exchange";
import { Product } from "../../domain/models/product";

export type ExchangeConvertedProduct = Product & { exchange: ExchangeConversion }