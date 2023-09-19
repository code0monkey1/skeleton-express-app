import { Schema, model } from 'mongoose';

interface User {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<User>('User', userSchema);

export default User;
