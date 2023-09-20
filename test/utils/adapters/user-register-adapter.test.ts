import { ZodError } from 'zod';
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
    it('returns parsed data', () => {
      //arrange
      const sut = new UserRegisterAdapter();

      const user: UserRegister = {
        username: 'ch',
        email: 'vonn@gmail.com',
        password: 'watson',
        repeat_password: 'wagson',
      };

      //act
      try {
        const result = sut.parse(user);
      } catch (e) {
        if (e instanceof ZodError) {
          console.log(e.errors.map((e) => e.message));
        }
      }

      //assert
    });
  });
});
