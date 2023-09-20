export default interface UserRegisterParser {
  parse(input: unknown): UserRegister;
}

export type UserRegister = {
  username: String;
  email: String;
  password: String;
  repeat_password: String;
};
