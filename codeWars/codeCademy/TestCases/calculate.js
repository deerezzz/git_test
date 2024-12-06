const Calculate = {
    factorial(input) {
      // Edge case: Negative numbers
      if (input < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
      }
  
      // Edge case: Non-integer values
      if (!Number.isInteger(input)) {
        throw new Error('Factorial is only defined for integers.');
      }
  
      // Base case: 0! and 1! are 1
      if (input === 0 || input === 1) {
        return 1;
      }
  
      // Recursive case
      return input * this.factorial(input - 1);
    }
  };
  
  module.exports = Calculate;
  