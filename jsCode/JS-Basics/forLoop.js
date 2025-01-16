

// Loops for, while, do...while, for..in, for...of
//increment expression ++ 

// //For Loops 

// for (let i = 0; i < 5; i++) {
//    if ( i % 2 !== 0) console.log(i); 
// }; 

// //While Loops 

// let i = 0; 
// while ( i<= 5) {
//     if ( i % 2 !== 0) console.log(i); 
//     i++; 
// }; 


// Do-while Loops, practical terms this won't be used often. 
 
//  let i = 9; 
//   do {
//     if ( i % 2 !== 0) console.log(i); 
//     i++; 
//   } while ( i <= 5); 


  // infinite Loops, this will crash your browser or computer

//   let i = 0;  
//   while ( i , 5) {
//     console.log(i); 
//     //i++; 
//   }

// for-in Loops

const person = {
    name: 'Dolo', 
    age: 39
}; 

for (let key in person) {
    console.log(key, person[key]); 
}

const colors = ['red', 'green', 'blue'];

// for-of 

for (let color of colors)
    console.log(color); 