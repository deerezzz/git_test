
function displayEvenNumbers(array) {
    for (const number of array) {
        if (number %2 === 0) 
            console.log(number); 
    }
}

function displayEvenNumbers(array) {
    for (const number of array) {
        if (number %2 != 0) 
            console.log(number); 
    }
}

displayEvenNumbers([1,2,3, 4, 5, 6, 7, 8, 9, 10]); 

