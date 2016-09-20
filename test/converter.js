var expect    = require("chai").expect;
var converter = require("../app/converter");

var testValues = [null, ‘’, 0, 1, 3, 4, 5, ‘I’, ‘III’, ‘IIII’, ‘IV’, ‘V’, 
					1968, ‘1473’, 2999, 3000, 10000, ‘CDXXIX’, ‘CD1X’, 
					‘error’, ‘MCDLXXXII’, ‘MCMLXXX’, ‘MMMMCMXCIX’, ‘MMMMDMXCIX’];

describe("Roman Numerals converter", function() {
  describe("Roman to Latin conversion", function() {
    it("converts the numerals", function() {

    });
  });

  describe("Latin to Roman conversion", function() {
    it("converts the number", function() {

    });
  });
});
