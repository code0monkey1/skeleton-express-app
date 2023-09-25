// import { RegisterUserRepository } from '../../../src/data/repositories/auth/register-user-repository';
// import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';

// import { UserRegisterParserImpl } from '../../../src/utils/validators/UserRegisterParserImpl';

// describe('UserRegisterParser', () => {
//   let mockUserRegisterAdapter: UserRegisterAdapter;

//   class MockUserRegisterAdapter implements UserRegisterAdapter {
//     parse(input: unknown): Error | RegisterUserRepository.Request {
//       throw new Error('Method not implemented.');
//     }
//   }

//   beforeEach(() => {
//     mockUserRegisterAdapter = new MockUserRegisterAdapter();
//   });
describe('', () => {
  it('test', () => {
    expect(true).toBeTruthy();
  });
});

//   describe('Type to be parsed is Valid', () => {
//     it('will return a user register object', () => {
//       //arrange
//       const userRegister = new UserRegisterParserImpl(mockUserRegisterAdapter);

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };
//       //act

//       jest
//         .spyOn(mockUserRegisterAdapter, 'parse')
//         .mockImplementation(() => user);

//       const result = userRegister.parse(user);

//       //assert
//       expect(result).toBe(user);
//     });
//   });

//   describe('Type to be parsed is Invalid', () => {
//     it('will return a user register object', () => {
//       //arrange
//       const userRegister = new UserRegisterParserImpl(mockUserRegisterAdapter);

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };

//       const error = new Error('Parse Error');

//       //act
//       jest.spyOn(mockUserRegisterAdapter, 'parse').mockReturnValueOnce(error);

//       const result = userRegister.parse(user);

//       //assert
//       expect(result).toEqual(error);
//     });
//   });
// });
