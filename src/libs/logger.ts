import pino from 'pino';
const ecsFormat = require('@elastic/ecs-pino-format')();
const pinoElastic = require('pino-elasticsearch');

const createLogger = () => {
  if (process.env.NODE_ENV == 'production') {
    const streamToElastic = pinoElastic({
      index: process.env.ELASTIC_INDEX,
      consistency: 'one',
      node: process.env.ELASTIC_HOST,
      'es-version': 7,
      'flush-bytes': 10,
    });

    return pino({ ...ecsFormat }, streamToElastic);
  }

  return pino();
};
export default createLogger()