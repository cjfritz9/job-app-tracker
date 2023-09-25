import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRouter from './routes/api.router.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: '*'
  })
);

app.use(morgan('combined'));
app.use(express.json());

app.use('/v1', apiRouter);

app.get('/*', (req, res) => {
  const reqUrl = req.url;
  res.status(404).send(`No page found at ${reqUrl}`);
});

export default app;
