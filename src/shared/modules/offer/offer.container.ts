import { ContainerModule } from 'inversify';
import { OfferService } from './offer-service.interface.ts';
import { Component } from '../../types/index.ts';
import { DefaultOfferService } from './default-offer.service.ts';
import { OfferEntity, OfferModel } from './offer.entity.ts';
import { types } from '@typegoose/typegoose';

export const createOfferContainer = () => new ContainerModule(({ bind }) => {
  bind<OfferService>(Component.OfferService).to(DefaultOfferService);
  bind<types.ModelType<OfferEntity>>(Component.OfferModel).toConstantValue(OfferModel);
});
