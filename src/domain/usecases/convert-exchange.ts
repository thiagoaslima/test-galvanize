
import { Currency } from "../models/currency";
import { MoneyType, Product } from "../models/product";
import { ExchangeConversion } from "../models/exchange";

export interface ConvertExchange {
  convert: (params: ConvertExchange.Input) => Promise<ConvertExchange.Response>;
}

export declare namespace ConvertExchange {
  export type Input = {
    price: MoneyType, 
    currency: Currency
  }

  export type Response = {
    price: MoneyType,
    exchange: ExchangeConversion
  };
}