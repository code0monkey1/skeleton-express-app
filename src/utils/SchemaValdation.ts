import { InvalidParamError } from '../errors/InvalidParamError';
import { Validation } from './interfaces/validators/Validation';

export class SchemaValidation
  implements Validation<{ name: string; age: string }>
{
  constructor(private readonly schemaValidator: SchemaValidator) {}
  validate(schemaObject: any): Error | { name: string; age: string } {
    const isValid = this.schemaValidator.isValid(schemaObject);

    if (!isValid) {
      throw new InvalidParamError(schemaObject);
    }

    return { name: 'c', age: 's' };
  }
}
