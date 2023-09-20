export default interface RegisterRequestParser {
  parse(input: unknown): RegisterUser;
}

export type RegisterUser = {
  username: String;
  email: String;
  password: String;
  repeat_password: String;
};
