function randomInteger(min, max) {
	if (Math.sign(min) === -1 || Math.sign(max) === -1) {return 'error'}
	if (typeof min !== 'number' || typeof max !== 'number') {return 'error'}
	if (typeof min == 'undefined' || typeof min == 'undefined') {return 'error'}
	if (min >= max) {return 'error'}
	
	let rand = min + Math.random() * (max - min +1);

	return Math.floor(rand);
}
alert( randomInteger(1, 3) );

function randomFloatNumber(min, max, decimailPlace) {
	if (Math.sign(min) === -1 || Math.sign(max) === -1) {return 'error'}
	if (typeof min !== 'number' || typeof max !== 'number' || typeof decimailPlace !== 'number') {return 'error'}
	if (typeof min == 'undefined' || typeof min == 'undefined' || typeof decimailPlace == 'undefined') {return 'error'}
	if (min >= max) {return 'error'}
	if (( (min.toString().includes('.')) ? (min.toString().split('.').pop().length) : (0) ) >= decimailPlace) {return 'error'}
	if (( (max.toString().includes('.')) ? (max.toString().split('.').pop().length) : (0) ) >= decimailPlace) {return 'error'}
	if (( (decimailPlace.toString().includes('.')) ? (decimailPlace.toString().split('.').pop().length) : (0) ) > 0) {return 'error'}

	let newMin = Math.floor(min*Math.pow(10, decimailPlace));
	let newMax = Math.floor(max*Math.pow(10, decimailPlace));
	let rand = randomInteger(newMin, newMax);
	let num = rand / Math.pow(10, decimailPlace);

	return (num);
}
alert( randomFloatNumber(1.1, 1.2, 3.56) );
