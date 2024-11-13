var assert = require("assert");
var Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {

    it('should return 120 for factorial of 5', () => {
      const input = 5;
      const expected = 120;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });

    it('should return 720 for factorial of 6', () => {
      const input = 6;
      const expected = 720;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });

    it('should return 6 for factorial of 3', () => {
      const input = 3;
      const expected = 6;
      const result = Calculate.factorial(input);
      assert.equal(result, expected);
    });

    // Edge case: negative input
    it('should throw an error for negative input', () => {
      const input = -5;
      assert.throws(() => {
        Calculate.factorial(input);
      }, /Factorial is not defined for negative numbers/);
    });

    // Edge case: non-integer input
    it('should throw an error for non-integer input', () => {
      const input = 3.5;
      assert.throws(() => {
        Calculate.factorial(input);
      }, /Factorial is only defined for integers/);
    });
    
  });
});

