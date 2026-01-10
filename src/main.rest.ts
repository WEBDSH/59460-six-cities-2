import { RestApplication } from './rest/index.js';
import 'reflect-metadata';
import { Container } from 'inversify';
import { Component } from './shared/types/index.js';
import {createRestApplicationContainer} from './rest/rest.container.js';
import {createUserContainer} from './shared/modules/user/index.js';
import {createOfferContainer} from './shared/modules/offer/index.js';

async function bootstrap() {
  const appContainer = new Container();
  await appContainer.load(createRestApplicationContainer(), createUserContainer(), createOfferContainer());

  const application = appContainer.get<RestApplication>(Component.RestApplication);

  application.init();
}

bootstrap();
