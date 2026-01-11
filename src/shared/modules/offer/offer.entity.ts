import {City, OfferType} from '../../types/index.ts';
import {defaultClasses, getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose';
import {UserEntity} from '../user/index.ts';

export class Coordinates {
  @prop({ required: true, type: () => Number })
  public lat: number;

  @prop({ required: true, type: () => Number })
  public lng: number;
}

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
  @prop({ required: true, trim: true, default: '', type: () => String })
  public title: string;

  @prop({ required: true, trim: true, default: '', type: () => String })
  public description: string;

  @prop({ required: true, default: Date.now, type: () => Date })
  public postDate: Date;

  @prop({
    type: () => String,
    enum: City,
    required: true
  })
  public city: City;

  @prop({ required: true, default: '', type: () => String })
  public preview: string;

  @prop({ required: true, type: () => [String], default: [] })
  public images: string[];

  @prop({ required: true, default: false, type: () => Boolean })
  public isPremium: boolean;

  @prop({ required: true, default: false, type: () => Boolean })
  public isFavorite: boolean;

  @prop({ required: true, default: 0, type: () => Number })
  public rating: number;

  @prop({
    type: () => String,
    enum: OfferType,
    required: true,
    default: OfferType.HOUSE
  })
  public type: OfferType;

  @prop({ required: true, default: 1, type: () => Number })
  public rooms: number;

  @prop({ required: true, default: 1, type: () => Number })
  public guests: number;

  @prop({ required: true, default: 100, type: () => Number })
  public price: number;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId: Ref<UserEntity>;

  @prop({
    required: true,
    _id: false,
    type: () => Coordinates
  })
  public coordinates: Coordinates;
}


export const OfferModel = getModelForClass(OfferEntity);
