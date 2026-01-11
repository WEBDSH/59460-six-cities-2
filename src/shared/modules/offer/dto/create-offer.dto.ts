import {City, Coordinates, OfferType} from '../../../types/index.ts';

export type CreateOfferDto = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  images: string[]
  isPremium: boolean
  isFavorite: boolean
  rating: number
  type: OfferType
  rooms: number
  guests: number
  userId: string;
  coordinates: Coordinates
  price: number;
}
