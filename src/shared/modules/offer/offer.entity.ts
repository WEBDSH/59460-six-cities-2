import {City, Coordinates, OfferType} from '../../types/index.js';
import {defaultClasses, getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose';
import {UserEntity} from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, trim: true, default: '' })
  public title: string;

  @prop({ required: true, trim: true, default: '' })
  public description: string;

  @prop({ required: true, default: Date.now })
  public postDate: Date;

  @prop({
    type: () => String,
    enum: City,
    required: true
  })
  public city: City;

  @prop({ required: true, default: '' })
  public preview: string;

  @prop({ required: true, type: () => [String], default: [] })
  public images: string[];

  @prop({ required: true, default: false })
  public isPremium: boolean;

  @prop({ required: true, default: false })
  public isFavorite: boolean;

  @prop({ required: true, default: 0 })
  public rating: number;

  @prop({
    type: () => String,
    enum: OfferType,
    required: true,
    default: OfferType.HOUSE
  })
  public type: OfferType;

  @prop({ required: true, default: 1 })
  public rooms: number;

  @prop({ required: true, default: 1 })
  public guests: number;

  @prop({ required: true, default: 100 })
  public price: number;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId: Ref<UserEntity>;

  @prop({ required: true, default: { lat: 0, lng: 0} })
  public coordinates: Coordinates;
}


export const OfferModel = getModelForClass(OfferEntity);
