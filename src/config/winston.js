const winston = require('winston');
const { format } = require('winston');

const { combine, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  const msg = `${timestamp} [${level.toUpperCase()}] Message: ${message}`;

  return msg;
});

const { timestamp } = format;

// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error'
    })
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;