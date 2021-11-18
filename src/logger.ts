import pino from 'pino-http';
import pinoPretty from 'pino-pretty';

export const makeLogger = (environment: string) => {
  const loggerConfig =
    environment === 'development' ? pinoPretty({ colorize: true }) : undefined;
  return pino(loggerConfig);
};
