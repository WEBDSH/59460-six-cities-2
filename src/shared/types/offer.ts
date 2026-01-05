import {User} from './user.js';

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
  author: User;
  coordinates: { lat: number, lng: number}
  price: number;
}
