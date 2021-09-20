import { Currency } from "../../domain/models/currency";

export type ExchangeData = {
  rate: number;
  timestamp: number;
}

export interface ConvertExchangeRepository {
  get: (currency: Currency) => Promise<ExchangeData & { upToDate: boolean }>
}
