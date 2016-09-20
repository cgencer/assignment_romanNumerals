// 		throw new TypeError('value required');
// 		throw new RangeError('invalid range');
// 		throw new SyntaxError('invalid syntax');

exports.romanToLatin = function(roman) {

};

exports.latinToRoman = function(latino) {
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

	if (type(latino) === 'string') {
		throw new TypeError('value required');
	}
	if (type(latino) === 'number' && latino > 3999) {
		throw new RangeError('invalid range');
	}
	if (type(latino) === 'object') {
		throw new SyntaxError('invalid value');
	}

	var matches = latino.match(/(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)/ig);
	if(matches === null) {
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
