import { NextFunction, Request, Response } from 'express';
import { SignUpSchema } from 'src/schemas/signUpSchema';
import { SignInSchema } from 'src/schemas/signInSchema';
import { SchemaOf } from 'yup';

function validateRequest(schema: SchemaOf<SignInSchema | SignUpSchema>) {
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
