const assert = require('assert');
const add = require('../app'); // Import the function you're testing

describe('Add Function', function() {
  it('should return the sum of two numbers', function() {
    assert.strictEqual(add(2, 3), 5); // Test case
  });
});
