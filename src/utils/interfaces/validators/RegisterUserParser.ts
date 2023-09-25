import { RegisterUserRepository } from '../../../data/repositories/auth/register-user-repository';

export default interface UserRegisterParser {
  parse(input: unknown): RegisterUserRepository.Response | Error;
}
