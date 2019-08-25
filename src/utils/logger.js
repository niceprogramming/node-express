import pino from 'pino';
import pretty from 'pino-pretty';

// TODO add options and use config
const options = {
  name: 'test',
  level: 'info',
  base: {},
  prettyPrint: false,
};

const logger = pino(options);

export default logger;
