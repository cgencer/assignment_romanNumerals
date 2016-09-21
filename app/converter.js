
exports.latinToRoman = function(latino) {

	var romano = '';
	var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
	roman = ["M", "MC","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

	if(Number.isInteger(latino)) {

		for (var i = 0; i <= decimal.length; i++) {
		}
		return romano;
	}else{
		throw new SyntaxError('invalid value');
	}

};

exports.romanToLatin = function(latino) {			// MCMXLII -> 524
	var lookup = {
		M: 	1000,
		CM: 900,
		D: 	500,
		CD: 400,
		C: 	100,
		XC: 90,
		L: 	50,
		XL: 40,
		X: 	10,
		IX: 9,
		V: 	5,
		IV: 4,
		I: 	1
	},
	roman = '',
	i;

	if (typeof(latino) === 'string') {
		throw new TypeError('value required');
	}else if (typeof(latino) === 'number' && latino > 3999) {
		throw new RangeError('invalid range');
	}else if (typeof(latino) === 'object') {
		throw new SyntaxError('invalid value');
	}else{
		for ( i in lookup ) {
			while ( latino >= lookup[i] ) {
				roman += i;
				latino -= lookup[i];
			}
		}
		return roman;
	}
};
