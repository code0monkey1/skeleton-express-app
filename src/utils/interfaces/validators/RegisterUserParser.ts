import { UserRegister } from '../../../types';

export default interface UserRegisterParser {
  parse(input: unknown): UserRegister | Error;
}
