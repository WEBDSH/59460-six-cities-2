import {User} from './user.js';
import {Coordinates} from './coordinates.js';

export enum OfferType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  ROOM = 'room',
  HOTEL = 'hotel',
}

export enum City {
  PARIS = 'paris',
  COLOGNE = 'cologne',
  BRUSSELS = 'brussels',
  AMSTERDAM = 'amsterdam',
  HAMBURG = 'hamburg',
  DUSSELDORF = 'dusseldorf',
}


export type Offer = {
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
  user: User;
  coordinates: Coordinates
  price: number;
}
