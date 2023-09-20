import UserRegisterParser, {
  UserRegister,
} from '../interfaces/validators/RegisterUserParser';

class UserRegisterAdapter implements UserRegisterParser {
  parse(input: unknown): UserRegister {
    throw new Error('Method not implemented.');
  }
}
