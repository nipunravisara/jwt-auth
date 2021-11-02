import { NextFunction, Request, Response } from 'express';
import { LogInSchema } from 'src/schemas/logInSchema';
import { SignInSchema } from 'src/schemas/signInSchema';
import { SchemaOf } from 'yup';

function validateRequest(schema: SchemaOf<SignInSchema | LogInSchema>) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const validatedReqBody = await schema.validate(req.body);
      req.body = validatedReqBody;
      next();
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };
}

export default validateRequest;
