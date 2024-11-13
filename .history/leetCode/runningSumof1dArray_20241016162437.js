var runningSum = function(nums) {
    const runningSum = []; 
    let cumulativeSum = 0; 

    for(let i= 0; i < nums.length; i++) {
        cumulativeSum += nums[i]; 
        runningSum.push(cumulativeSum); 
    }

    return runningSum; 
};