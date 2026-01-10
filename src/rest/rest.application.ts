import {Logger} from '../shared/libs/logger/index.js';
import { inject, injectable } from 'inversify';
import {Config, RestSchema} from '../shared/libs/config/index.js';
import {Component, UserType} from '../shared/types/index.js';
import {DatabaseClient} from '../shared/libs/database-client/index.js';
import {getMongoURI} from '../shared/helpers/index.js';
import {UserService} from '../shared/libs/modules/user/index.js';

@injectable()
export class RestApplication {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
    @inject(Component.UserService) private readonly userService: UserService,
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

    await this.userService.create({
      email: 'sh@mail.ru',
      password: 'password',
      name: 'John',
      avatar: 'Doe',
      type: UserType.DEFAULT
    }, this.config.get('SALT'));

    const user = await this.userService.findByEmail('sh@mail.ru');

    console.log(user);

    this.logger.info('Init database completed');
  }
}
