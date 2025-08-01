import { createLogger, format, transports } from 'winston';

const {combine, timestamp, printf, colorize, errors} = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(colorize({all: true}),
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    errors({ stack: true}),
    logFormat
),
transports: [
    new transports.Console(),
    new transports.File({filename: 'app.log'})
]
})

export default logger