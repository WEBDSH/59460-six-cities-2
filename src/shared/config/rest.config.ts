import { Config } from './config.interface.js';
import { config } from 'dotenv';
import {Logger} from '../libs/logger/index.js';
import {RestSchema, configRestSchema} from './rest.schema.js';

export class RestConfig implements Config<RestSchema> {
  private readonly config: RestSchema;

  constructor(
    private readonly logger: Logger
  ) {
    const parsedOutput = config();

    const result = configRestSchema.safeParse(parsedOutput.parsed);

    if (!result.success) {
      this.logger.error('[Config] Invalid configuration:', result.error);
      throw new Error('Can\'t validate .env file');
    }

    this.config = result.data;
    this.logger.info('.env file found and successfully parsed!');
  }

  public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
    return this.config[key];
  }
}
