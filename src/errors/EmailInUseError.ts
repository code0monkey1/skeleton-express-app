export default class EmailInUseError extends Error {
  constructor(
    public readonly message = 'email is already in use',
    public readonly status = 400
  ) {
    super('Email In Use Error');
  }
}
