import { UserProps } from '../../../types';
import CustomErrorHandler from '../../../utils/CustomErrorHandler';
import { UseCase } from '../use-case';

export interface SignUpUseCase
  extends UseCase<SignUpUseCase.Request, SignUpUseCase.Response> {
  execute(userData: SignUpUseCase.Request): Promise<SignUpUseCase.Response>;
}

export namespace SignUpUseCase {
  export type Request = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>;
  export type Response = string | CustomErrorHandler;
}
