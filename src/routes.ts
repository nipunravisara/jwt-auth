import { Express, Request, Response } from 'express';
import signInController from './controllers/signInController';
import validateSignIn from './middlewares/validateSignIn';

function routes(app: Express): void {
  app.get('/api', (req: Request, res: Response) =>
    res.status(200).send('Hola from server.')
  );

  app.post('/api/signin', validateSignIn, signInController);

  app.post('/api/login', validateSignIn, signInController);
}

export default routes;
