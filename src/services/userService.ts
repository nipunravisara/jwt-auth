import {
  UserDocument,
  CreateUserInput,
  LoginUserInput,
  LoginUserReturnType,
  ReturnType,
} from 'src/types/userType';
import generateJwtToken from '../utils/generateJwtToken';

import User from '../models/userModel';
import getHashedPassword from '../utils/getHashedPassword';
import validatePassword from '../utils/validatePassword';

// Create new user
export async function createUser(
  userData: CreateUserInput
): Promise<ReturnType<Omit<UserDocument, 'password'>>> {
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

export async function signInUser(
  userCredentials: LoginUserInput
): Promise<ReturnType<LoginUserReturnType>> {
  const currentUser = await User.findOne({ email: userCredentials.email });

  if (!currentUser) {
    return {
      success: false,
      status: 401,
      message:
        'No account is associate with enterd email, Try creating account.',
      data: null,
    };
  }

  const isPasswordValid = await validatePassword(
    currentUser,
    userCredentials.password
  );

  if (!isPasswordValid) {
    return {
      success: false,
      status: 401,
      message: 'Invalid password, Try again.',
      data: null,
    };
  }

  const token = generateJwtToken(currentUser);

  const user = {
    userId: currentUser.id,
    userName: `${currentUser.firstName} ${currentUser.lastName}`,
    userEmail: currentUser.email,
    token,
  };

  return {
    success: true,
    status: 200,
    message: 'Login success.',
    data: user,
  };
}
