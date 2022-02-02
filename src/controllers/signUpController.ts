import { Request, Response } from 'express';
import { createUser } from '../services/userService';

async function signInController(
  req: Request,
  res: Response
): Promise<Response> {
  const userData = req.body;
  const response = await createUser(userData);

  if (response.success === true) {
    return res.status(response.status).json(response);
  }

  return res.status(response.status).json(response);
}

export default signInController;
