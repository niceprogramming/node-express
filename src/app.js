import express from 'express';
import api from './routes';
import logger from './utils/logger';

const app = express();
const port = 3000;

app.use('/api', api);

app.listen(port, () => logger.info(`Example app listening on port ${port}!`));
