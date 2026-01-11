import { Logger as PinoInstance, pino, transport } from 'pino';
import { Logger } from './logger.interface.ts';
import { injectable } from 'inversify';
import {resolve} from 'node:path';

const LOG_FILE_PATH = 'logs/rest.log';

@injectable()
export class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    const destination = resolve(process.cwd(), LOG_FILE_PATH);

    const multiTransport = transport({
      targets: [
        {
          target: 'pino/file',
          options: { destination },
          level: 'debug'
        },
        {
          target: 'pino/file',
          level: 'info',
          options: {},
        }
      ],
    });

    this.logger = pino({}, multiTransport);
  }

  public debug(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.logger.debug(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.logger.error(error, message, ...args);
  }

  public info(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.logger.warn(message, ...args);
  }
}
