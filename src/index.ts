import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import database from './utils/database';

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  routes(app);
  database();
  console.log(`✅ Server is up and running on port ${process.env.PORT}`);
});
