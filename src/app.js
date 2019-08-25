import express from 'express';
import bodyParser from 'body-parser';
import api from './routes/api';
import logger from './utils/logger';

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => logger.info(`Example app listening on port ${port}!`));
