import { City } from './offer.ts';

export type MockCity = {
  name: City;
  latitude: number;
  longitude: number;
};

export type MockServerData = {
  titles: string[];
  descriptions: string[];
  images: string[];
  users: string[];
  emails: string[];
  avatars: string[];
  types: string[];
  cities: MockCity[];
}
