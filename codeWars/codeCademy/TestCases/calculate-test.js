var assert = require("assert");
var Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {

    it('should return 120 for factorial of 5', () => {
      // Setup
      const input = 5;
      const expected = 120;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expected);
    });

    it('should return 720 for factorial of 6', () => {
      // Setup
      const input = 6;
      const expected = 720;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expected);
    });

    it('should return 6 for factorial of 3', () => {
      // Setup
      const input = 3;
      const expected = 6;

      // Exercise
      const result = Calculate.factorial(input);

      // Verify
      assert.equal(result, expected);
    });

    // Edge case: negative input
    it('should throw an error for negative input', () => {
      // Setup
      const input = -5;
      const expectedErrorMessage = 'Factorial is not defined for negative numbers.';

      // Exercise & Verify
      assert.throws(() => {
        Calculate.factorial(input);
      }, (error) => {
        return error.message === expectedErrorMessage;
      });
    });

    // Edge case: non-integer input
    it('should throw an error for non-integer input', () => {
      // Setup
      const input = 3.5;
      const expectedErrorMessage = 'Factorial is only defined for integers.';

      // Exercise & Verify
      assert.throws(() => {
        Calculate.factorial(input);
      }, (error) => {
        return error.message === expectedErrorMessage;
      });
    });

  });
});
