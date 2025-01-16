
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
        return 'FizzBuzz'; 
    else if (number % 3 === 0)
        return 'fizz';
    else if (number % 5 === 0)
        return 'Buzz'; 
    else
        return number; 
  }
  
  console.log(fizzBuzz(15)); 


  // alternative 

  function fizzBuzz(number) {
    return (number % 3 === 0 && number % 5 === 0) ? 'FizzBuzz' :
           (number % 3 === 0) ? 'fizz' :
           (number % 5 === 0) ? 'Buzz' :
           number;
}

console.log(fizzBuzz(15)); // Outputs 'FizzBuzz'

// Alternative #2 

const output = fizzBuzz(15);
console.log(output); 

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return Nan; 

    if ((input % 3) && (input % 5 === 0))
           return 'FizzBuzz'

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz'; 
   
    return input; 
}
