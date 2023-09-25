import HashGenerator from '../../application/interfaces/cryptography/HashGenerator';
import { CreateUserRepository } from '../../data/repositories/auth/create-user-repository';
import { LoadUserByEmailRepository } from '../../data/repositories/auth/load-user-by-email-repository';
import EmailInUseError from '../../errors/EmailInUseError';

import { SignUpUseCase } from '../interfaces/use-cases/sign-up-use-case';

export class SignUp implements SignUpUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hashGenerator: HashGenerator
  ) {}
  async execute(
    userData: SignUpUseCase.Request
  ): Promise<SignUpUseCase.Response> {
    // if the email exists, throw email in use error

    const user = await this.loadUserByEmailRepository.loadUserByEmail(
      userData.email
    );

    if (!user) {
      throw new EmailInUseError();
    }

    return user;
  }
}
