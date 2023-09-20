import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';
import { UserRegister } from '../../../src/utils/interfaces/validators/RegisterUserParser';
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
      //act

      jest
        .spyOn(mockUserRegisterAdapter, 'parse')
        .mockImplementation(() => new Error('Method not implemented.'));

      expect(() => {
        userRegister.parse(user);
      }).toThrowError('Parse Error');
    });
  });
});
