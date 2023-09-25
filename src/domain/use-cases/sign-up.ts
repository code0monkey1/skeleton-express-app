import { CreateUserRepository } from '../../data/repositories/auth/create-user-repository';
import LoadUserByEmailRepository from '../../data/repositories/auth/load-user-by-email-repository';
import { SignUpUseCase } from '../interfaces/use-cases/sign-up-use-case';

export class SignUp implements SignUpUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hashGenerator: HashGenerator
  ) {}
  execute(userData: SignUpUseCase.Request): Promise<SignUpUseCase.Response> {
    throw new Error('Method not implemented.');
  }
}
