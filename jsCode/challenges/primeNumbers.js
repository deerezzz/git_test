

showPrimes(20); 

// Prime whose factors are only one and itself. 
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by it's factors. 


function showPrimes(limit) {
   for ( let number = 2; i <= limit; i++) 
    if (isPrime(number)) console.log(number); 
}; 

function isPrime(number) {
    for( let factor = 2;  factor < number; factor++ ) 
        if (number % factor === 0) 
            return false; 

        return true; 
   }


