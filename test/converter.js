var expect    = require("chai").expect;
var converter = require("../app/converter");

var testValues = [
					{input: null, expect: NaN}, 
					{input: ‘’, expect: NaN}, 
					{input: 0, expect: NaN}, 
					{input: 1, expect: NaN}, 
					{input: 3, expect: NaN}, 
					{input: 4, expect: NaN}, 
					{input: 5, expect: NaN}, 
					{input: ‘I’, expect: 1}, 
					{input: ‘III’, expect: 3}, 
					{input: ‘IIII’, expect: 4}, 
					{input: ‘IV’, expect: 4}, 
					{input: ‘V’, expect: 5}, 
					{input: 1968, expect: NaN}, 
					{input: ‘1473’, expect: NaN}, 
					{input: 2999, expect: NaN}, 
					{input: 3000, expect: NaN}, 
					{input: 10000, expect: NaN}, 
					{input: ‘CDXXIX’, expect: }, 
					{input: ‘CD1X’, expect: }, 
					{input: ‘error’, expect: NaN}, 
					{input: ‘MCDLXXXII’, expect: }, 
					{input: ‘MCMLXXX’, expect: }, 
					{input: ‘MMMMCMXCIX’, expect: }, 
					{input: ‘MMMMDMXCIX’, expect: }];

describe("Roman Numerals converter", function() {
  describe("Roman to Latin conversion", function() {
    it("converts the numerals", function() {
 
 		testValues.forEach(function(test) {
			it('correctly converts ' + test.expect, function() {
				try {
					var cnv = converter.romanToLatin(test.input);
					expect(cnv).to.equal(test.expect);
				} catch (e) {
					if (e instanceof TypeError) {
						// statements to handle TypeError exceptions
					} else if (e instanceof RangeError) {
						// statements to handle RangeError exceptions
					} else if (e instanceof EvalError) {
						// statements to handle EvalError exceptions
					}
				}

			});
		});

    });
  });

  describe("Latin to Roman conversion", function() {
    it("converts the number", function() {

    });
  });
});
