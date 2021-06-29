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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function shuffle(elements) {
  for (let currentIndex = elements.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    const temp = elements[currentIndex];
    elements[currentIndex] = elements[randomIndex];
    elements[randomIndex] = temp;
  }
  return elements;
}

function getRandomSliceElements(elements) {
  return shuffle(elements).slice(0, getRandomInteger(1, elements.length));
}

export {getRandomInteger, getRandomFloatNumber, getRandomArrayElement, shuffle, getRandomSliceElements};
