function getRandomInteger(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {return null;}
  if (min < 0 || max <= min) {return null;}
  return Math.floor(min + Math.random() * (max - min));
}

function getRandomFloatNumber(min, max, decimalPlace) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof decimalPlace !== 'number') {return null;}
  if (min < 0 || max <= min) {return null;}
  return parseFloat((min + Math.random() * (max - min)).toFixed(decimalPlace));
}

const TITLES = ['Armani Hotel Dubai', 'Burj Al Arab Jumeirach', 'Raffles Dubai', 'Address Beach Resort','Atlantis The Palm', 'The Westin Dubai Mina Seyahi Beach Resort & Marina', 'Jumeirach Zabeel Saray', 'Adress Downtown', 'Sofitel Dubai The Palm Resort & Spa', 'One&Only The Palm Dubai'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Junior Suite', 'Suite', 'De Luxe', 'Duplex', 'Family Room', 'Studio', 'Village', 'Chalet', 'Apartament', 'Hineymoon Room' ];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const SERIAL_NUMBER = 10;
const USED_NUMBERS = [];
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const DECIMAL = 5;

const getAvatar = () => {
  const number = getRandomInteger(1, SERIAL_NUMBER);
  USED_NUMBERS.push(number);
  return (number < 10) ? `img/avatars/user0${number}.png` : `img/avatars/user${number}.png`;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getFeatures = () => {
  const featuresClone = [...FEATURES];
  const removeAmount = getRandomInteger(0, featuresClone.length - 1);

  for (let index = 1; index <= removeAmount; index++) {
    const removeNumber = getRandomInteger(0, featuresClone.length - 1);
    featuresClone.splice(removeNumber, 1);
  }

  return featuresClone;
};

const getPhotos = () => {
  const photosClone = [...PHOTOS];
  const removeAmount = getRandomInteger(0, photosClone.length - 1);

  for (let index = 1; index <= removeAmount; index++) {
    const removeNumber = getRandomInteger(0, photosClone.length - 1);
    photosClone.splice(removeNumber, 1);
  }

  return photosClone;
}

const createTestAd = () => {
  const lat = getRandomFloatNumber(MIN_LAT, MAX_LAT, DECIMAL);
  const lng = getRandomFloatNumber(MIN_LGN, MAX_LNG, DECIMAL);

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      adress: {lat, lng},
      price: getRandomInteger(2000, 15000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getFeatures(),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getPhotos(),
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

createAdsArray(10);

