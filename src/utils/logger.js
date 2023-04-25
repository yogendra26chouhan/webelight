const winston = require("winston");
require("winston-daily-rotate-file");

const LOG_DIR = process.env.LOG_DIR || 'logs';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

/**
 * Create a new winston logger.
 */
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.json(),
      level: 'info'
    }),
    new winston.transports.Console({
      format: winston.format.json(),
      level: 'error'
    }),
    new winston.transports.DailyRotateFile({
      format: winston.format.json(),
      level: LOG_LEVEL,
      dirname: LOG_DIR,
      datePattern: 'YYYY-MM-DD',
      filename: '%DATE%-debug.log'
    })
  ]
});

/**
 * A writable stream for winston logger.
 */
exports.logStream = {
  write: function(message) {
    logger.info(message);
  }
};

module.exports = {
  logger: logger,
};
