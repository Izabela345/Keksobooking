function getRandomInteger(min, max) {
	if (min < 0 || max <= min) {return null}
	if (typeof min !== 'number' || typeof max !== 'number') {return null}
	
	return Math.floor(min + Math.random() * (max - min +1));
}
alert(getRandomInteger(1, 3));

function randomFloatNumber(min, max, decimalPlace) {
	if (min < 0 || max <= min) {return null}
	if (typeof min !== 'number' || typeof max !== 'number' || typeof decimalPlace !== 'number') {return null}

	return (min + Math.random() * (max - min +1)).toFixed(decimalPlace);
}
alert(randomFloatNumber(2.2, 5.3, 3));
