import { Schema, model } from 'mongoose';

interface User {
  name: String;
  email: String;
  password: String;
  createdAt: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<User>(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = model<User>('User', userSchema);

export default User;
