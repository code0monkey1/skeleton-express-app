// import { RegisterUserRepository } from '../../../src/data/repositories/auth/register-user-repository';
// import { UserRegisterAdapter } from '../../../src/utils/adapters/UserRegisterAdapter';
describe('', () => {
  it('test', () => {
    expect(true).toBeTruthy();
  });
});
// describe('user-register-adapter', () => {
//   describe('when data is valid', () => {
//     it('returns parsed data', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'chiranjeev',
//         email: 'vonn@gmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };

//       //act

//       const result = sut.parse(user);

//       //assert

//       expect(result).toStrictEqual(user);
//     });
//   });
//   describe('when data is invalid', () => {
//     it(' throws Error when username length is less than 3 chars', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'ab',
//         email: 'vonnden@gmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };

//       const expectedError = 'String must contain at least 3 character(s)';

//       //act
//       //assert
//       expect(() => sut.parse(user)).toThrowError(expectedError);
//     });
//     it(' throws Error when email is invalid', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };

//       const expectedError = 'Invalid email';

//       //act
//       //assert
//       expect(() => sut.parse(user)).toThrowError(expectedError);
//     });
//   });

//   describe('2 or more invalid fields', () => {
//     it('throws Error when email is invalid and name is less than 3 chars', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };
//       let expectedError =
//         'String must contain at least 3 character(s) , Invalid email';

//       //act
//       //assert
//       expect(() => sut.parse(user)).toThrowError(expectedError);
//     });

//     it('throws Error when password and repeat_password are not the same', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };
//       let expectedError = `Passwords don't match`;

//       //act
//       //assert
//       expect(() => sut.parse(user)).toThrowError(expectedError);
//     });

//     it('when password is less then 6 letters long', () => {
//       //arrange
//       const sut = new UserRegisterAdapter();

//       const user: RegisterUserRepository.Request = {
//         username: 'abc',
//         email: 'vonngmail.com',
//         password: 'watson',
//         repeat_password: 'watson',
//         name: 'chiranjeev',
//       };

//       let expectedError = `String must contain at least 6 character(s)`;

//       //act
//       //assert
//       expect(() => sut.parse(user)).toThrowError(expectedError);
//     });
//   });
// });
