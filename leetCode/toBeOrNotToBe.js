function expect(val) {
    return {
      toBe: function(comparisonVal) {
        if (val === comparisonVal) {
          return true;
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: function(comparisonVal) {
        if (val !== comparisonVal) {
          return true;
        } else {
          throw new Error("Equal");
        }
      }
    };
  }
  
  // Example usage:
  expect(5).toBe(5);  // Returns true
  expect(5).notToBe(10);  // Returns true
  expect(5).toBe(3);  // Throws "Not Equal"
  expect(5).notToBe(5);  // Throws "Equal"
  