export default interface UserRegisterParser {
  parse(input: unknown): UserRegister | Error;
}

export type UserRegister = {
  username: String;
  email: String;
  password: String;
  repeat_password: String;
};
