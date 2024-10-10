
// Built-In math classes 
// refer to Developer.mozilla.org - in interviews same with fizzbuzz objects. various methods 

//Commonly used listed below: 

Math.round(3.14) // Rounds a number 
Math.floor(4.6)  // Rounds down 
Math.ceil(4.2)   // Rounds up 
Math.max(1,2)  // Finds the max number or largest 
Math.max(1, 2, 3, 4, 5) // It accepts more than two arguments for finding the max 
Math.min( 1, 2, 3) // Passes the smallest given number 
Math.pow(2, 3) // raised to the power of (base, exponent) the base number is then multiplied by itself three times. with a total of 8. 
Math.sqrt(25) // returns the square root of a given number. The square root of a number is a value that, when multiplied by itself, gives the original number.



Math.random // The most useful, This will return a number between 0 and one as a decimal value
// perfomed differently if you want a range, example below: 
//FORMULA FOR A MINIMUM AND MAX NUMBER


 let min = 1; 
 let max = 100; 

 const randomNum = Math.round(Math.random() * (max - min) + min); 
 console.log(randomNum); 



