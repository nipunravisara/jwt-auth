import { Request, Response } from 'express';
import { createUser } from '../services/userService';

async function signInController(
  req: Request,
  res: Response
): Promise<Response> {
  const userData = req.body;
  try {
    const { name } = await createUser(userData);
    return res.status(201).json({ name });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
}

export default signInController;
