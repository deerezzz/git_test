/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0; // to keep track of the maximum count of consecutive 1's
    let currentCount = 0; // To count the current consecutive 1's 
    
    for (let i =0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++; // Increment the current count if the element is 1 
        } else {
            maxCount = Math.max(maxCount, currentCount); // Update maxCount if needed 
            currentCount = 0; // reset the current count 
        }
    }
    
        // Check again at the end in case the array ends with 1's 
    maxCount = Math.max(maxCount, currentCount); 
    
    return maxCount; // Return the maximum count of consecutive 1's 
};

// example usage 
