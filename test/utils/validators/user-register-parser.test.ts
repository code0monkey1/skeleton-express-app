import { UserRegister } from '../../../src/types';
import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';

import { UserRegisterParserImpl } from '../../../src/utils/validators/UserRegisterParserImpl';

describe('UserRegisterParser', () => {
  let mockUserRegisterAdapter: UserRegisterAdapter;

  class MockUserRegisterAdapter implements UserRegisterAdapter {
    parse(input: unknown): Error | UserRegister {
      throw new Error('Method not implemented.');
    }
  }

  beforeEach(() => {
    mockUserRegisterAdapter = new MockUserRegisterAdapter();
  });

  describe('Type to be parsed is Valid', () => {
    it('will return a user register object', () => {
      //arrange
      const userRegister = new UserRegisterParserImpl(mockUserRegisterAdapter);

      const user: UserRegister = {
        username: '',
        email: '',
        password: '',
        repeat_password: '',
      };
      //act

      jest
        .spyOn(mockUserRegisterAdapter, 'parse')
        .mockImplementation(() => user);

      const result = userRegister.parse(user);

      //assert
      expect(result).toBe(user);
    });
  });

  describe('Type to be parsed is Invalid', () => {
    it('will return a user register object', () => {
      //arrange
      const userRegister = new UserRegisterParserImpl(mockUserRegisterAdapter);

      const user: UserRegister = {
        username: '',
        email: '',
        password: '',
        repeat_password: '',
      };

      const error = new Error('Parse Error');

      //act
      jest.spyOn(mockUserRegisterAdapter, 'parse').mockReturnValueOnce(error);

      const result = userRegister.parse(user);

      //assert
      expect(result).toEqual(error);
    });
  });
});
