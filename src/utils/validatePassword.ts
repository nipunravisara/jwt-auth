import bcrypt from 'bcrypt';
import { UserDocument } from 'src/types/userType';

async function validatePassword(
  user: UserDocument,
  password: string
): Promise<boolean> {
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return false;
  }
  return true;
}

export default validatePassword;
