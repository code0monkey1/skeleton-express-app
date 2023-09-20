export default interface UserRegisterParser {
  parse(input: unknown): UserRegister | Error;
}

export type UserRegister = {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
};
