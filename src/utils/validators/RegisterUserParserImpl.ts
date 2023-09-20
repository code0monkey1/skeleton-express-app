// validationSchemas.ts
import { z } from 'zod';
import UserRegisterParser, {
  UserRegister,
} from '../interfaces/validators/RegisterUserParser';

class UserRegisterAdapter implements UserRegisterParser {
  parse(input: unknown): UserRegister {
    /* The `.refine()` method is used to add additional validation rules to the validation schema. In
  this case, it is checking if the `password` field is equal to the `repeat_password` field. If
  they are not equal, it will throw an error with the specified message ("Passwords don't match")
  and the path of the error will be set to `['repeat_password']`. This allows for more specific
  error messages and error paths when validating the data. */
    const registerSchema = z
      .object({
        username: z.string().min(3).max(20).trim(),
        email: z.string().email().trim(),
        password: z.string().min(6),
        repeat_password: z.string().min(6),
      })
      .refine((data) => data.password === data.repeat_password, {
        message: " : Passwords don't match",
        path: ['repeat_password'], // path of error
      });

    return registerSchema.parse(input);
  }
}
