import { RestApplication } from './rest/index.js';
import 'reflect-metadata';
import { Container } from 'inversify';
import { Component } from './shared/types/index.js';
import {createRestApplicationContainer} from './rest/rest.container.js';
import {createUserContainer} from './shared/libs/modules/user/index.js';

async function bootstrap() {
  const appContainer = new Container();
  await appContainer.load(createRestApplicationContainer(), createUserContainer());

  const application = appContainer.get<RestApplication>(Component.RestApplication);

  application.init();
}

bootstrap();
