import {
  default as RegisterRequestParser,
  RegisterUser,
  default as RegisterUserParser,
} from '../interfaces/validators/RegisterUserParser';

class RegisterUserParserImpl implements RegisterUserParser {
  parse(input: unknown): RegisterUser | Error {
    throw new Error('Method not implemented.');
  }
}
