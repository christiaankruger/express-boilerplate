import http from 'http';
import { config } from '../config/config';
import { app } from './app';

const port = config.get('port');

http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
