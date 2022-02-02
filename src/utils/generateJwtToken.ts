import jwt from 'jsonwebtoken';
import { UserDocument } from '../types/userType';

function generateJwtToken(user: UserDocument): string {
  return jwt.sign(
    {
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: '1h',
    }
  );
}

export default generateJwtToken;
