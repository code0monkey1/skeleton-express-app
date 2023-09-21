import UserRepository from '../../data/interfaces/repositories/users/user-repository';
import { User, UserRegister } from '../../types';
import SignUpUseCase from '../interfaces/use-cases/sign-up-use-case';
export class SignUp implements SignUpUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  execute(user: UserRegister): void | Promise<User> {
    const newUser = this.userRepository.signIn(user);
  }
}
