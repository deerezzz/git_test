
// Not common to use, and the syntax is ugly. 

let i = 0; 
while ( i <= 10) {
    // if ( i === 5) break; 

    if( i % 2 ===0) {
        i++; 
        continue; 
    }

    console.log(i); 
    i++; 
}