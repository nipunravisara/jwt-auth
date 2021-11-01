import { Document } from 'mongoose';

export interface UserInput {
  name: string;
  email: string;
  password: string;
}

export interface UserDocument extends UserInput, Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
