
let size = 8;  // You can change this value to generate different sizes
let chessboard = '';

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // Alternate between space and "#"
    if ((row + col) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';  // Move to the next line after each row
}

console.log(chessboard);
