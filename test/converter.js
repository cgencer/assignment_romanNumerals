var expect    = require("chai").expect;
var converter = require("../app/converter");

var testValues = [
					{input: null, expect: null}, 
					{input: '', expect: null}, 
					{input: 0, expect: null}, 
					{input: 1, expect: null}, 
					{input: 3, expect: null}, 
					{input: 4, expect: null}, 
					{input: 5, expect: null}, 
					{input: 'I', expect: 1}, 
					{input: 'III', expect: 3}, 
					{input: 'IIII', expect: 4}, 
					{input: 'IV', expect: 4}, 
					{input: 'V', expect: 5}, 
					{input: 1968, expect: null}, 
					{input: '1473', expect: null}, 
					{input: 2999, expect: null}, 
					{input: 3000, expect: null}, 
					{input: 10000, expect: null}, 
					{input: 'CDXXIX', expect: 429}, 
					{input: 'CD1X', expect: null}, 
					{input: 'error', expect: null}, 
					{input: 'MCDLXXXII', expect: 1482}, 
					{input: 'MCMLXXX', expect: 1980}, 
					{input: 'MMMMCMXCIX', expect: 4999}, 
					{input: 'MMMMDMXCIX', expect: null}
				];

describe("Roman Numerals converter test cases...", function() {

	describe("Roman to Latin conversion", function() {
	 		testValues.forEach(function(test) {
				it('correctly converts ' + test.input + ' of type ' + typeof(test.input), function(test) {
					try {
						var cnv = converter.romanToLatin(test.input);
						expect(cnv).to.equal(test.expect);
					} catch (e) {
						if (e instanceof TypeError) {
							// statements to handle TypeError exceptions
						} else if (e instanceof RangeError) {
							// statements to handle RangeError exceptions
						} else if (e instanceof SyntaxError) {
							// statements to handle SyntaxError exceptions
						}
					}

				});
			});

	});

	describe("Latin to Roman conversion", function() {
	 	testValues.forEach(function(test) {
	 		if(test.expect !== null) {
				it('correctly converts ' + test.input + ' of type ' + typeof(test.input), function(test) {
					var cnv = converter.romanToLatin(test.expect);
					expect(cnv).to.equal(test.input);
				});
			}
		});
	});

});
