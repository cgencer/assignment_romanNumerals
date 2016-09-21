exports.latinToRoman = function(latino) {

	var romano = '';
	var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
	roman = ["M", "MC","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

	if(Number.isInteger(latino)) {

		for (var i = 0; i <= decimal.length; i++) {
			while (latino%decimal[i] < latino) {   
				romano += roman[i];
				latino -= decimal[i];
			}
		}
		return romano;
	}else{
		throw new SyntaxError('invalid value');
	}
};

exports.romanToLatin = function(romano) {			// MCMXLII -> 524
	var i, regEx = /(?=[MDCLXVI])M*(C[MD]|D?C*)(X[CL]|L?X*)(I[XV]|V?I*)/ig;

	var regEx = /(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})/ig;
  	if (typeof(romano) === 'number' && Number.isInteger(romano)) {
		throw new RangeError('invalid range');

  	}else if (typeof(romano) === 'number' && romano > 0 && romano < 4000) {
		throw new RangeError('is already a latin number');

	}else if (typeof(romano) === 'object') {
		throw new SyntaxError('invalid value');

	}

	if(typeof(romano) === 'string') {
		if('undefined' === typeof romano || '' === romano || null === romano || undefined === romano) {
			throw new SyntaxError('value required');

		}else if(romano.match(regEx) === null ) {
			throw new SyntaxError('\tApp: couldnt determine the roman numerals \''+romano+'\' trough regexp');
	
		}else{
			var result = 0;
			var oRomano = romano;
			var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
			roman = ["M", "MC","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

			for (var i = 0; i<=decimal.length; i++) {
				while (romano.indexOf(roman[i]) === 0) {
					result += decimal[i];
					romano = romano.replace(roman[i], '');
				}
			}
			if (result < 1 || result > 3999) {
				throw new RangeError('invalid range');
			}
			return result;
		}
	}

};
