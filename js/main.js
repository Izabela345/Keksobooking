function getRandomInteger(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {return null;}
  if (min < 0 || max <= min) {return null;}
  return Math.floor(min + Math.random() * (max - min +1));
}
getRandomInteger(1, 3);

function randomFloatNumber(min, max, decimalPlace) {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof decimalPlace !== 'number') {return null;}
  if (min < 0 || max <= min) {return null;}
  return (min + Math.random() * (max - min +1)).toFixed(decimalPlace);
}
randomFloatNumber(2.2, 5.3, 3);
