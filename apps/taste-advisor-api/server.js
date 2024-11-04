import express from 'express';
import cors from 'cors';
import { restRouter } from './src/routers/restRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.use('/api/v1', restRouter);

(async () =>
  await app.listen(port, () => {
    console.info(`Server running on port ${port}`);
  }))();
