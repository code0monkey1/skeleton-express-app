export interface Validation<T> {
  validate: (input: any) => Error | T;
}
