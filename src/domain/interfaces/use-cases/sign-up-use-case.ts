
export interface SignUpInterface <SignUpInterface.Request, SignUpInterface.Response> {
  execute(userData: SignUpInterface.Request): Promise<SignUpInterface.Response>;
}

export namespace SignUpInterface {
  export type Request = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = string | EmailInUseError;
}
