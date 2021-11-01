import bcrypt from 'bcrypt';
import { UserDocument, UserInput } from 'src/types/userType';
import User from '../models/userModel';

export async function createUser(
  userData: UserInput
): Promise<UserDocument | typeof Error> {
  // generate password hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  try {
    // create new user
    return await User.create({
      ...userData,
      password: hashedPassword,
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
