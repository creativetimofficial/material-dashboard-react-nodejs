const pino = require('pino');

const logger = pino({ prettyPrint: process.env.NODE_ENV === 'development' });
module.exports = logger;
