import { Document } from 'mongoose';

export interface CreateUserReturnType<T> {
  success: boolean;
  status: number;
  data: T | string;
}

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface UserDocument extends UserInput, Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
