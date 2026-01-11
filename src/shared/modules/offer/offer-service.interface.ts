import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.ts';
import {CreateOfferDto} from './dto/create-offer.dto.ts';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
}
