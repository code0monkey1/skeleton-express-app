import { Schema, model } from 'mongoose';

interface User {
  name: string;
  email: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<User>(
  {
    name: String,
    email: String,
    hashedPassword: String,
  },
  {
    timestamps: true,
  }
);

const User = model<User>('User', userSchema);

export default User;
