import User from '../../../../models/User';
import { UserRegister } from '../../../../types';

export default interface UserRepository {
  signIn(user: UserRegister): Promise<User> | void;
}
