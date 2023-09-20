import { Schema, model } from 'mongoose';

interface User {
  name: String;
  email: String;
  password: String;
}

const userSchema = new Schema<User>({
  name: String,
  email: String,
  password: String,
});

const User = model<User>('User', userSchema);

export default User;
