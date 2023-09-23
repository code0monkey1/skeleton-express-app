import UserRepository from '../../data/interfaces/repositories/users/user-repository';
import { SignUpUseCase } from '../interfaces/use-cases/sign-up-use-case';

export class SignUp implements SignUpUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  execute(userData: SignUpUseCase.Request): Promise<SignUpUseCase.Response> {
    throw new Error('Method not implemented.');
  }
}
