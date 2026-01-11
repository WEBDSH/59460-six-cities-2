import { RestApplication } from './rest/index.ts';
import 'reflect-metadata';
import { Container } from 'inversify';
import { Component } from './shared/types/index.ts';
import {createRestApplicationContainer} from './rest/rest.container.ts';
import {createUserContainer} from './shared/modules/user/index.ts';
import {createOfferContainer} from './shared/modules/offer/index.ts';

async function bootstrap() {
  const appContainer = new Container();
  await appContainer.load(createRestApplicationContainer(), createUserContainer(), createOfferContainer());
  const application = appContainer.get<RestApplication>(Component.RestApplication);

  application.init();
}

bootstrap();
