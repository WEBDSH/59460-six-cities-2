import {Category} from './category.js';
import {User} from './user.js';

export enum OfferType {
  Buy = 'Buy',
  Sell = 'Sell',
}


export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  image: string;
  type: OfferType
  price: number;
  categories: Category[];
  user: User;
}
