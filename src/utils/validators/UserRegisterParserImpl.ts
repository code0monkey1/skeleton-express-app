import { UserRegisterAdapter } from '../adapters/UserRegisterAdapter';
import UserRegisterParser, {
  UserRegister,
} from '../interfaces/validators/RegisterUserParser';
export class UserRegisterParserImpl implements UserRegisterParser {
  constructor(private readonly userRegisterAdapter: UserRegisterAdapter) {}
  parse(input: unknown): UserRegister | Error {
    const user = this.userRegisterAdapter.parse(input);
    return user;
  }
}
