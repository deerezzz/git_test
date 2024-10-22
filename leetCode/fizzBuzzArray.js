var fizzBuzz = function(n) {
    let result = [];  // Initialize an empty array to store the results

    for (let i = 1; i <= n; i++) {  // Loop through numbers from 1 to n
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');  // Push 'FizzBuzz' to the array
        } else if (i % 3 === 0) {
            result.push('Fizz');  // Push 'Fizz' to the array
        } else if (i % 5 === 0) {
            result.push('Buzz');  // Push 'Buzz' to the array
        } else {
            result.push(i.toString());  // Push the number as a string to the array
        }
    }

    return result;  // Return the array of results
};
