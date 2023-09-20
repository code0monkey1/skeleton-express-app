interface Validator<T> {
  isValid(input: T): boolean;
}
