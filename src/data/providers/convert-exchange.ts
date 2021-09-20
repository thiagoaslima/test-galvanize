import { DEFAULT_CURRENCY } from '../../domain/models/currency';
import { ConvertExchange } from "../../domain/usecases/convert-exchange";
import { InvalidCurrencyError } from '../../data/errors/invalid-currency';
import { ConvertExchangeRepository } from '../../data/protocols/convert-exchange-repository copy';

export class ConvertExchangeProvider implements ConvertExchange {

  constructor(private repository: ConvertExchangeRepository) {}

  async convert({ price, currency }: ConvertExchange.Input): Promise<ConvertExchange.Response> {
    if (price.currency !== DEFAULT_CURRENCY) {
      throw new InvalidCurrencyError(`Price must be in ${DEFAULT_CURRENCY}. Received currency ${price.currency}.`);
    }

    const { rate, timestamp, upToDate } = await this.repository.get(currency);

    return {
      price: {
        valueCents: Math.round(price.valueCents * rate),
        currency,
      },
      exchange: {
        originalValueCents: price.valueCents,
        originalCurrency: price.currency,
        rate,
        timestamp,
        upToDate
      }
    }
  }
}