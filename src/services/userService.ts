import {
  CreateUserReturnType,
  UserDocument,
  UserInput,
} from 'src/types/userType';
import User from '../models/userModel';
import getHashedPassword from '../utils/getHashedPassword';

// Create new user
export async function createUser(
  userData: UserInput
): Promise<CreateUserReturnType<Omit<UserDocument, 'password'>>> {
  const existingUser = await User.findOne({ email: userData.email });

  if (existingUser !== null) {
    return {
      success: false,
      status: 409,
      message: 'User already exist.',
      data: null,
    };
  }

  try {
    const hashedPassword = await getHashedPassword(userData.password);
    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
    });

    return {
      success: true,
      status: 200,
      message: 'User created successfully.',
      data: newUser,
    };
  } catch (error: any) {
    return {
      success: false,
      status: 404,
      message: error.message,
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
