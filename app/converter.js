// 		throw new TypeError('value required');
// 		throw new RangeError('invalid range');
// 		throw new SyntaxError('invalid syntax');

exports.latinToRoman = function(romano) {

	var latino;
	if(romano.match(/(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)/ig) === null) {
		throw new SyntaxError('invalid value');		
	}else{

	}
	return latino;
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
