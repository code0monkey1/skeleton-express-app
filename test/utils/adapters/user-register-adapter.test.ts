import { UserRegister } from '../../../src/types';
import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';

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
    it(' throws Error when username length is less than 3 chars', () => {
      //arrange
      const sut = new UserRegisterAdapter();

      const user: UserRegister = {
        username: 'ab',
        email: 'vonn@gmail.com',
        password: 'watson',
        repeat_password: 'watson',
      };

      const expectedError = 'String must contain at least 3 character(s)';

      //act
      //assert
      expect(() => sut.parse(user)).toThrowError(expectedError);
    });
    it(' throws Error when email is invalid', () => {
      //arrange
      const sut = new UserRegisterAdapter();

      const user: UserRegister = {
        username: 'abc',
        email: 'vonngmail.com',
        password: 'watson',
        repeat_password: 'watson',
      };

      const expectedError = 'Invalid email';

      //act
      //assert
      expect(() => sut.parse(user)).toThrowError(expectedError);
    });
  });
  it('throws Error when email is invalid and name is less than 3 chars', () => {
    //arrange
    const sut = new UserRegisterAdapter();

    const user: UserRegister = {
      username: 'ab',
      email: 'vonngmail.com',
      password: 'watson',
      repeat_password: 'watson',
    };
    let expectedError =
      'String must contain at least 3 character(s) , Invalid email';

    //act
    //assert
    expect(() => sut.parse(user)).toThrowError(expectedError);
  });

  it('throws Error when password and repeat_password are not the same', () => {
    //arrange
    const sut = new UserRegisterAdapter();

    const user: UserRegister = {
      username: 'abc',
      email: 'vonn@gmail.com',
      password: 'abcdef',
      repeat_password: 'defdef',
    };
    let expectedError = `Passwords don't match`;

    //act
    //assert
    expect(() => sut.parse(user)).toThrowError(expectedError);
  });

  it('when password is less then 6 letters long', () => {
    //arrange
    const sut = new UserRegisterAdapter();

    const user: UserRegister = {
      username: 'abc',
      email: 'vonn@gmail.com',
      password: 'abcde',
      repeat_password: 'abcde',
    };
    let expectedError = `String must contain at least 6 character(s)`;

    //act
    //assert
    expect(() => sut.parse(user)).toThrowError(expectedError);
  });
});
