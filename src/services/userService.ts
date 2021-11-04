import bcrypt from 'bcrypt';
import { UserDocument, UserInput } from 'src/types/userType';
import User from '../models/userModel';

// Generate salt and password hash
export async function generatePasswordHash(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Create new user
export async function createUser(
  userData: UserInput
): Promise<UserDocument | typeof Error> {
  try {
    const hashedPassword = await generatePasswordHash(userData.password);

    return await User.create({
      ...userData,
      password: hashedPassword,
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function validateUser(email: string): Promise<boolean> {
  const user = await User.findOne({ email });

  if (user === null) {
    return false;
  }
  return true;
}

export async function signInUser(
  userCredentials: Omit<UserInput, 'name'>
): Promise<any> {
  const isValidUser = await validateUser(userCredentials.email);

  if (isValidUser) {
    return 1;
  }
  return 0;
}
