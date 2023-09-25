import HashGenerator from '../../../src/application/interfaces/cryptography/HashGenerator';
import { CreateUserRepository } from '../../../src/data/repositories/auth/create-user-repository';
import { LoadUserByEmailRepository } from '../../../src/data/repositories/auth/load-user-by-email-repository';

import { SignUp } from '../../../src/domain/use-cases/sign-up';
import EmailInUseError from '../../../src/errors/EmailInUseError';
describe('sign-up', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when email id already exists in db', () => {
    it('throws Email Id Exists error', async () => {
      //arrange
      const { mockLoadEmailByUserRepository, signUp } = getSut();

      jest
        .spyOn(mockLoadEmailByUserRepository, 'loadUserByEmail')
        .mockImplementation(() => Promise.resolve(null));

      //act

      try {
        await signUp.execute({
          name: '',
          email: '',
          password: '',
          repeat_password: '',
        });
      } catch (error) {
        if (error instanceof Error) {
          //assert
          expect(error).toBeInstanceOf(EmailInUseError);
          expect(error.message).toEqual('email is already in use');
        }
      }
    });
  });
});

const getSut = () => {
  const mockCreateUserRepository: CreateUserRepository = {
    registerUser: function (
      userData: CreateUserRepository.Request
    ): Promise<string> {
      throw new Error('Function not implemented.');
    },
  };

  const mockLoadEmailByUserRepository: LoadUserByEmailRepository = {
    loadUserByEmail: function (
      email: string
    ): Promise<LoadUserByEmailRepository.Response> {
      throw new Error('Function not implemented.');
    },
  };

  const mockHashGenerator: HashGenerator = {
    hash: function (data: string): string | Promise<string> {
      throw new Error('Function not implemented.');
    },
  };

  const signUp = new SignUp(
    mockCreateUserRepository,
    mockLoadEmailByUserRepository,
    mockHashGenerator
  );

  return {
    mockCreateUserRepository,
    mockLoadEmailByUserRepository,
    mockHashGenerator,
    signUp,
  };
};
