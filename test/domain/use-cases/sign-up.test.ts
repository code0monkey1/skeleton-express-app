import EmailInUseError from '../../../src/errors/EmailInUseError';
import User from '../../../src/models/user-model';
import {
  getRegisteredUser,
  getSut,
  getUserToRegister,
} from '../helpers/sign-up.helper';
describe('sign-up', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('when email id already exists in db', () => {
    it('throws Email Id Exists error', async () => {
      //arrange
      const { mockLoadEmailByUserRepository, signUp } = getSut();

      const registeredUser: User = getRegisteredUser();

      jest
        .spyOn(mockLoadEmailByUserRepository, 'loadUserByEmail')
        .mockImplementation(() => Promise.resolve(registeredUser));

      const user = getUserToRegister();

      //act
      //assert
      await expect(signUp.execute(user)).rejects.toThrow(EmailInUseError);

      await expect(signUp.execute(user)).rejects.toThrow(
        'email is already in use'
      );
    });
  });

  describe('when email id does not exist in db', () => {
    it('username is returned', async () => {
      //arrange
      const {
        mockLoadEmailByUserRepository,
        mockCreateUserRepository,
        mockHashGenerator,
        signUp,
      } = getSut();

      const user = getUserToRegister();

      jest
        .spyOn(mockLoadEmailByUserRepository, 'loadUserByEmail')
        .mockImplementation(() => Promise.resolve(null));

      jest
        .spyOn(mockCreateUserRepository, 'registerUser')
        .mockImplementation(() => Promise.resolve(user.name));

      jest
        .spyOn(mockHashGenerator, 'hash')
        .mockImplementation(() => Promise.resolve(''));
      //act

      const result = await signUp.execute(user);

      // assert

      expect(result).toBe(user.name);
    });
  });
});
