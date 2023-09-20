import UserRegisterParser, {
  UserRegister,
} from '../interfaces/validators/RegisterUserParser';
import { UserRegisterAdapter } from './UserRegisterAdapter';
export class UserRegisterParserImpl implements UserRegisterParser {
  constructor(private readonly userRegisterAdapter: UserRegisterAdapter) {}
  parse(input: unknown): UserRegister {
    return this.userRegisterAdapter.parse(input);
  }
}
