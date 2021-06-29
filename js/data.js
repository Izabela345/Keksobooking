import {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, shuffle, getRandomSliceElements} from './util.js';
const TITLES = ['Armani Hotel Dubai', 'Burj Al Arab Jumeirach', 'Raffles Dubai', 'Address Beach Resort','Atlantis The Palm', 'The Westin Dubai Mina Seyahi Beach Resort & Marina', 'Jumeirach Zabeel Saray', 'Adress Downtown', 'Sofitel Dubai The Palm Resort & Spa', 'One&Only The Palm Dubai'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Junior Suite', 'Suite', 'De Luxe', 'Duplex', 'Family Room', 'Studio', 'Village', 'Chalet', 'Apartament', 'Hineymoon Room' ];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SERIAL_NUMBER = 10;
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const DECIMAL = 5;
const USED_NUMBERS = [];

const getAvatar = () => {
  const number = getRandomInteger(1, SERIAL_NUMBER);
  USED_NUMBERS.push(number);
  return (number < 10) ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`;
};

const createTestAd = (index) => {
  const lat = getRandomFloatNumber(MIN_LAT, MAX_LAT, DECIMAL);
  const lng = getRandomFloatNumber(MIN_LNG, MAX_LNG, DECIMAL);

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: {lat, lng},
      price: getRandomInteger(2000, 15000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomSliceElements(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomSliceElements(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const createAdsArray = (adsNumber) => {
  const adsArray = [];
  for (let index = 1; index <= adsNumber; index++) {
    adsArray.push(createTestAd(index));
  }
  return adsArray;
};

export {createAdsArray};
