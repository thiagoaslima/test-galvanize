import fetch from 'cross-fetch';
import { Currency, DEFAULT_CURRENCY } from '../domain/models/currency';

import { CurrencyAPI } from '../setup/configuration';
import { ExchangeRateUnavailableError } from '../data/errors/exchange-rate-unavailable';
import { ConvertExchangeRepository, ExchangeData } from '../data/protocols/convert-exchange-repository copy';

type CurrencyAPIResponse = {
  success: boolean,
  timestamp: number,
  quotes: {
    USDCAD: number,
    USDEUR: number,
    USDGBP: number
  }
}

const cache = new Map<Currency, ExchangeData>();

export class RemoteConvertExchangeRepository implements ConvertExchangeRepository {
  async get(currency: Currency) {
    if (currency === DEFAULT_CURRENCY) {
      return {
        rate: 1,
        timestamp: Date.now(),
        upToDate: true
      }
    }
    
    let upToDate = true;
 
    try {
      const response = await fetch(CurrencyAPI.url)
      const data = await response.json() as CurrencyAPIResponse;
      
      Object.keys(data.quotes).forEach((key) => {
        const curr = key as keyof typeof data.quotes;
        const cacheKey = curr.replace('USD', '') as Currency;

        cache.set(cacheKey, {
          rate: data.quotes[curr],
          timestamp: data.timestamp
        })
      })
    } catch (err) {
      if (!cache.has(currency)) {
        throw new ExchangeRateUnavailableError();
      } else {
        upToDate = false;
      }
    }
  

    const exchangeData = cache.get(currency);

    if (!exchangeData) {
      throw new ExchangeRateUnavailableError();
    }

    return {
      ...exchangeData,
      upToDate
    }
  }
}
