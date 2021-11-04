import { Request, Response } from 'express';
import { signInUser } from '../services/userService';

async function logInController(req: Request, res: Response): Promise<Response> {
  const userCredentials = req.body;

  try {
    const usr = signInUser(userCredentials);
    return res.status(201).json(usr);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
}

export default logInController;
