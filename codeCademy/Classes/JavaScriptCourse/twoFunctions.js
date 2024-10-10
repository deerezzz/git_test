

function displayEvenNumbers(array) {
    for (const number of array) {
        if (number % 2 === 0) 
            console.log(number); 
    }
}

function displayOddNumbers(array) {
    for (const number of array) {
        if (number % 2 != 0) 
            console.log(number); 
    }
}

displayOddNumbers([1,2,3,4,5,6,7,8,9,10]); 

// two functions that will display an array of even numbers, and an array of odd numbers. 
// By having the functions in the top with the argument as an array it will display if 
// the numbers are even by having become divisible by 2 if the remainder is zero
// it will display the even numbers. Vice versa for odd numbers. Which is not equal to a 
// zero remainder. So it will then display the odd numbers instead. 