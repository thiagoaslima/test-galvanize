export class ExchangeRateUnavailableError extends Error {
  name = 'ExchangeRateUnavailableError';

  constructor(message = 'Could not fetch the Currency API') {
    super(message);
  }
}