import { Currency } from "./currency";

export type ExchangeConversion = {
  originalValueCents: number;
  originalCurrency: Currency.USD;
  rate: number;
  timestamp: number;
  upToDate: boolean;
}
