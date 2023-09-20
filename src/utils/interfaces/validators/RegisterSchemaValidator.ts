interface RegisterSchemaValidator {
  isValid(obj: unknown): boolean | RegisterSchemaValidator;
}
