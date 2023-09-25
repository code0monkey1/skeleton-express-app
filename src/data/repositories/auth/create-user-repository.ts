import { User } from '../../../types';

export interface CreateUserRepository {
  registerUser(
    userData: CreateUserRepository.Request
  ): Promise<CreateUserRepository.Response>;
}

export namespace CreateUserRepository {
  export type Request = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = string;
}
