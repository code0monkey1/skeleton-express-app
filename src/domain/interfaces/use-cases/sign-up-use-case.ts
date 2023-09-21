import { User, UserRegister } from '../../../types';

export default interface SignUp {
  execute(user: UserRegister): Promise<User> | void;
}
