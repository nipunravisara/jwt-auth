import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

async function validateSignIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const signInSchema = yup.object().shape({
    name: yup.string().required({ message: 'Name is required' }),
    email: yup
      .string()
      .email({ message: 'Invalid email address.' })
      .required({ message: 'Email is required' }),
    password: yup
      .string()
      .min(8, { message: 'Password must contain 8 characters or more.' })
      .required({ message: 'Password is required.' }),
  });

  await signInSchema
    .validate(req.body)
    .then(() => next())
    .catch(error => res.status(409).json(error.errors));
}

export default validateSignIn;
