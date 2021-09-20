export class InvalidCurrencyError extends Error {
  name = 'InvalidCurrencyError';

  constructor(message = 'Invalid currency') {
    super(message);
  }
}