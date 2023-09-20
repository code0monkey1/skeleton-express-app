interface RegisterRequestParser {
  parse(input: RegisterRequestParser.Request): RegisterRequestParser.Response;
}

export namespace RegisterRequestParser {
  export type Request = unknown;
  export type Response = RegisterUser | Error;
}

export type RegisterUser = {
  username: String;
  email: String;
  password: String;
  repeat_password: String;
};
