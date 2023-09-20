interface SchemaValidator<T> {
  isValid(obj: unknown): boolean | T;
}
