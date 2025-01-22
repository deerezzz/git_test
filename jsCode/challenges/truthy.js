// Falsy
// undefined 
//null
// ''
// false 
//0 
// NAN 

// Create a function and returns the number of truthy values in this array. 


const array = [0, undefined, null, '', 2, 3]; 
console.log(countTruthy(array)); 

function countTruthy(array) {
   let count = 0; 

   for( let value of array)
    if (value)
        count++; 
    return count; 
}; 



