import { Document } from 'mongoose';

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
