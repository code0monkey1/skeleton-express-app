class SchemaValidationError extends Error {
  constructor(
    public readonly errors: string[],
    public readonly message = 'Schema Validation Error',
    public readonly status = 401
  ) {
    super('');
    this.name = 'SchemaValidationError';
  }
}
