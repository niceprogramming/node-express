import express from 'express';
import api from './routes';

const app = express();
const port = 3000;

app.use('/', api);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
