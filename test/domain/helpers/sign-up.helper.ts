import HashGenerator from '../../../src/application/interfaces/cryptography/HashGenerator';
import { CreateUserRepository } from '../../../src/data/repositories/auth/create-user-repository';
import { LoadUserByEmailRepository } from '../../../src/data/repositories/auth/load-user-by-email-repository';
import { SignUp } from '../../../src/domain/use-cases/sign-up';

export const getSut = () => {
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

export const getUserToRegister = () => {
  return {
    name: 'chiranjeev',
    email: '',
    password: '',
    repeat_password: '',
  };
};

export const getRegisteredUser = () => {
  return {
    name: 'chiranjeev',
    email: '',
    hashedPassword: '',
    createdAt: new Date(),
  };
};
