import { Express, Request, Response } from 'express';
import signInController from './controllers/signInController';
import validateRequest from './middlewares/validateRequest';
import logInSchema from './schemas/logInSchema';
import signInSchema from './schemas/signInSchema';

function routes(app: Express): void {
  app.get('/api', (req: Request, res: Response) =>
    res.status(200).send('Hola from server.')
  );

  app.post('/api/signin', validateRequest(signInSchema), signInController);

  app.post('/api/login', validateRequest(logInSchema), signInController);
}

export default routes;
