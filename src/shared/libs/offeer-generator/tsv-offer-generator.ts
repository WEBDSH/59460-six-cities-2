import {OfferGenerator} from './offer-generator.interface.js';
import {MockServerData} from '../../types/index.js';
import {generateRandomValue, getRandomBool, getRandomItem, getRandomItems} from '../../helpers/index.js';
import dayjs from 'dayjs';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockServerData: MockServerData) {}

  generate(): string {
    const title = getRandomItem(this.mockServerData.titles);
    const description = getRandomItem(this.mockServerData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem(this.mockServerData.cities);
    const cityName = city.name;
    const cityCoords = `${city.latitude};${city.longitude}`;
    const preview = getRandomItem(this.mockServerData.images);
    const images = getRandomItems(this.mockServerData.images);
    const isPremium = getRandomBool();
    const isFavorite = getRandomBool();
    const rating = generateRandomValue(0, 5, 2);
    const type = getRandomItem(this.mockServerData.types);
    const rooms = generateRandomValue(1, 8);
    const guests = generateRandomValue(1, 10);
    const price = generateRandomValue(100, 100_000);
    const name = getRandomItems(this.mockServerData.users);
    const email = getRandomItems(this.mockServerData.emails);
    const avatar = getRandomItem(this.mockServerData.avatars);
    const isPro = getRandomBool();

    return [
      title, description, postDate, cityName, preview, images.join(';'), isPremium, isFavorite, rating, type,
      rooms, guests, price, name, email, avatar, isPro, cityCoords
    ].join('\t');
  }
}
