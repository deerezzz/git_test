// Write your code here:

// function that takes in an array of strings and uses a for loop to print a greeting with each string in the array. 

function greetAliens(aliens) {
    for (let i = 0; i < aliens.length; i++) {
      console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
  }
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);
  