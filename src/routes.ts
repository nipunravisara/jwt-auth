import { Express, Request, Response } from 'express';
import signInController from './controllers/signInController';
import signUpController from './controllers/signUpController';
import validateRequest from './middlewares/validateRequest';
import signInSchema from './schemas/signInSchema';
import signUpSchema from './schemas/signUpSchema';

function routes(app: Express): void {
  app.get('/api', (_: Request, res: Response) =>
    res.status(200).send('Hello from server...')
  );

  app.post('/api/signup', validateRequest(signUpSchema), signUpController);

  app.post('/api/signin', validateRequest(signInSchema), signInController);
}

export default routes;
