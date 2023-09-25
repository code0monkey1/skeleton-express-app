class RegisterSchemaValidationError extends Error {
  constructor(
    public readonly errors: string[],
    public readonly message = 'schema of user trying to register is invalid',
    public readonly status = 401
  ) {
    super('');
    this.name = 'RegisterSchemaValidationError';
  }
}
