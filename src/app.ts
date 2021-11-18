import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

app.use(limiter);
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
