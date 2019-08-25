import pino from 'pino';

// TODO add options and use config
const options = {
  name: 'test',
  level: 'info',
  base: {},
  prettyPrint: true,
};

const logger = pino(options);

export default logger;
