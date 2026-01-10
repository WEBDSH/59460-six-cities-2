import {City, Offer, OfferType, UserType} from '../types/index.js';

export const createOffer = (offerData: string): Offer => {
  const [
    title,
    description,
    postDate,
    city,
    preview,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    rooms,
    guests,
    price,
    name,
    email,
    avatar,
    isPro,
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  const [lat, lng] = coordinates.split(';');

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    preview,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number.parseFloat(rating),
    type: type as OfferType,
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    user: {
      name,
      email,
      avatar,
      type: isPro === 'true' ? UserType.PRO : UserType.DEFAULT,
    },
    coordinates: {
      lat: Number.parseFloat(lat),
      lng: Number.parseFloat(lng),
    },
  };
};
