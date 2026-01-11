import {Logger} from '../shared/libs/logger/index.ts';
import { inject, injectable } from 'inversify';
import {Config, RestSchema} from '../shared/libs/config/index.ts';
import {Component} from '../shared/types/index.ts';
import {DatabaseClient} from '../shared/libs/database-client/index.ts';
import {getMongoURI} from '../shared/helpers/index.ts';


@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
    // @inject(Component.UserService) private readonly userService: UserService,
    // @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {}

  private async initDb() {
    const mongoUri = getMongoURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    return this.databaseClient.connect(mongoUri);
  }

  public async init() {
    this.logger.info('Application initialization');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    this.logger.info('Init database…');
    await this.initDb();
    this.logger.info('Init database completed');
  }
}
