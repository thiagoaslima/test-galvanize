export class InvalidParameterError extends Error {
  name = 'InvalidError';

  constructor(invalidParameterName: string) {
    super(`The parameter ${invalidParameterName} is invalid`);
  }
}