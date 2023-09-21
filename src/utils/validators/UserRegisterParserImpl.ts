import { UserRegister } from '../../types';
import { UserRegisterAdapter } from '../adapters/UserRegisterAdapter';
import UserRegisterParser from '../interfaces/validators/RegisterUserParser';
export class UserRegisterParserImpl implements UserRegisterParser {
  constructor(private readonly userRegisterAdapter: UserRegisterAdapter) {}
  parse(input: unknown): UserRegister | Error {
    const user = this.userRegisterAdapter.parse(input);
    return user;
  }
}
