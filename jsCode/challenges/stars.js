

showStars(5); 

function showStars(rows) {
 for (let row = 1; row <= rows; row++) { // This loop controls how many rows of stars will be printed. 
    let pattern = ''; 
    for (let i = 0; i < row; i++) // For each row, this loop decides how many stars(*) should appear in that row. 
        pattern += '*'; 
    console.log(pattern); 
 }
}