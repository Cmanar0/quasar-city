/* eslint-disable no-console */
import { LogLevelEnum } from 'src/types/enums/logLevelEnum';
import * as process from 'process';

const log = {
  debug(message : string) {
    if (!this.canLog(LogLevelEnum.Verbose)) return;

    console.debug(message);
  },
  info(message : string) {
    if (!this.canLog(LogLevelEnum.Info)) return;

    console.info(message);
  },
  warn(message : string) {
    if (!this.canLog(LogLevelEnum.Warning)) return;

    console.warn(message);
  },
  error(message : string, exception = null) {
    if (!this.canLog(LogLevelEnum.Error)) return;
    console.error(message, exception?.response ?? exception?.message ?? exception);
  },
  canLog(logLevel : LogLevelEnum) {
    return logLevel >= this.minLogLevel;
  },
  minLogLevel: process.env.NODE_ENV === 'production' ? LogLevelEnum.Info : LogLevelEnum.Verbose,
};

export { log };
