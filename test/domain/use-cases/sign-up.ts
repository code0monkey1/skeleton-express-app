import HashGenerator from '../../../src/application/interfaces/cryptography/HashGenerator';
import { CreateUserRepository } from '../../../src/data/repositories/auth/create-user-repository';
import { LoadUserByEmailRepository } from '../../../src/data/repositories/auth/load-user-by-email-repository';

import { SignUp } from '../../../src/domain/use-cases/sign-up';
describe('sign-up', () => {
  let mockCreateUserRepository: CreateUserRepository;
  let mockLoadEmailByUserRepository: LoadUserByEmailRepository;
  let mockHashGenerator: HashGenerator;

  describe('when email id already exists in db', () => {
    it('throws Email Id Exists error', () => {
      //arrange
      const sut = new SignUp(
        mockCreateUserRepository,
        mockLoadEmailByUserRepository,
        mockHashGenerator
      );

      //act

      //assert
    });
  });
});
