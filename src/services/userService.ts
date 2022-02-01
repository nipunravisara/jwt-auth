import bcrypt from 'bcrypt';
import {
  CreateUserReturnType,
  UserDocument,
  UserInput,
} from 'src/types/userType';
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
): Promise<CreateUserReturnType<UserDocument>> {
  const existingUser = User.find({ email: userData.email });

  if (existingUser !== null) {
    return {
      success: false,
      status: 409,
      data: 'User already exist.',
    };
  }

  try {
    const hashedPassword = await generatePasswordHash(userData.password);
    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
    });

    return {
      success: false,
      status: 400,
      data: newUser,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 404,
      data: error,
    };
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
