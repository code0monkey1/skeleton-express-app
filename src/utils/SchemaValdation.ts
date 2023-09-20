import { InvalidParamError } from '../errors/InvalidParamError';
import { Validation } from './interfaces/validators/Validation';

export class SchemaValidation implements Validation {
  constructor(private readonly schemaValidator: SchemaValidator) {}
  validate(schemaObject: any): Error | null {
    const isValid = this.schemaValidator.isValid(schemaObject);

    if (!isValid) {
      throw new InvalidParamError(schemaObject);
    }

    return null;
  }
}
