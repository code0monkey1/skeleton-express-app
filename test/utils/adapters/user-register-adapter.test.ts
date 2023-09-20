import { ZodError } from 'zod';
import CustomErrorHandler from '../../../src/utils/CustomErrorHandler';
import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';
import { UserRegister } from '../../../src/utils/interfaces/validators/RegisterUserParser';

describe('user-register-adapter', () => {
  describe('when data is valid', () => {
    it('returns parsed data', () => {
      //arrange
      const sut = new UserRegisterAdapter();

      const user: UserRegister = {
        username: 'chiranjeev',
        email: 'vonn@gmail.com',
        password: 'watson',
        repeat_password: 'watson',
      };

      //act

      const result = sut.parse(user);

      //assert

      expect(result).toStrictEqual(user);
    });
  });
  describe('when data is invalid', () => {
    it(' returns username length less than 3 , when username is `ab` ', () => {
      //arrange
      const sut = new UserRegisterAdapter();

      const user: UserRegister = {
        username: 'ab',
        email: 'vonn@gmail.com',
        password: 'watson',
        repeat_password: 'watson',
      };

      //act

      expect(() => sut.parse(user)).toThrowError(
        'String must contain at least 3 character(s)'
      );

      //assert
    });
  });
});
