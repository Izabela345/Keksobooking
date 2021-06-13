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
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Junior Suite', 'Suite', 'De Luxe', 'Duplex', 'Family Room', 'Studio', 'Village', 'Chalet', 'Apartament', 'Hineymoon Room' ];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const serialNumber = 10;
const avatars = [];

for (let counter = 1; counter <= serialNumber; counter++) {
  (counter < 10) ? avatars.push(`img/avatars/user0${counter}.png`) : avatars.push(`img/avatars/user${counter}.png`);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const getRandomArraySlice = (elements) => elements.slice(0, getRandomInteger(1, elements.length));
const cutRandomArrayElement = (elements) => elements.splice(getRandomInteger(0, elements.length - 1), 1).toString();
const createTestAd = () => {
  const location = {
    lat: getRandomFloatNumber(35.65000, 35.70000, 5),
    lng: getRandomFloatNumber(139.70000, 139.80000, 5),
};

  return {
    author: {
      avatar: cutRandomArrayElement(avatars),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      price: getRandomInteger(2000, 15000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(TIME),
      checkout: getRandomArrayElement(TIME),
      features: getRandomArraySlice(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandowArraySlice(PHOTOS),
    },
    location: locatioon,
  };
};

const generateAdsArray = () => new Array(serialNumber).fill(null).map(() => createTestAd());
console.log(generateAdsArray());
