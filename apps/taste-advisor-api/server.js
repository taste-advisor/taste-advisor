import express from 'express';
import cors from 'cors';
import { usersRouter } from './src/routers/usersRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.use('/users', usersRouter);

(async () =>
  await app.listen(port, () => {
    console.info(`Server running on port ${port}`);
  }))();
