import { Currency } from "./currency"

export type Product = {
  id: number;
  name: string;
  price: MoneyType;
}

export type MoneyType = {
  valueCents: number;
  currency: Currency;
}