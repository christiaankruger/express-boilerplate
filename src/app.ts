import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { makeLogger } from './logger';
import { config } from '../config/config';

export const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

const logger = makeLogger(config.get('env'));

app.use(logger);
app.use(limiter);
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
