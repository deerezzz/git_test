function points(games) {
    let totalPoints = 0;
    let pointsArray = [];
  
    for (let game of games) {
      let [x, y] = game.split(':').map(Number); // Split game scores into x and y
      let pointsForGame = 0;
  
      if (x > y) {
        pointsForGame = 3;  // Win: 3 points
      } else if (x === y) {
        pointsForGame = 1;  // Draw: 1 point
      } // Loss gives 0 points by default
  
      pointsArray.push(`${game} (${pointsForGame} points)`);  // Add game result and points to the array
      totalPoints += pointsForGame;  // Add points for the game to total points
    }
  
    console.log(`Games and Points: ${pointsArray.join(', ')}`);
    return totalPoints;  // Return the total points
  }
  
  // Test case with assert.strictEqual (if using testing)
  const assert = require('assert');
  assert.strictEqual(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
  
  // Output the results
  console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));  // Output: 30
  