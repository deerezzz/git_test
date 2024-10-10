const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase(); 
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput; 
    } else {
      console.log('Error!'); 
      return null;
    }
  }; 
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 
  
    switch (randomNumber) {
      case 0: 
        return 'rock'; 
      case 1: 
        return 'paper';
      case 2: 
        return 'scissors';
      default:
        return 'rock'; // this is just a fallback, though it should never reach here
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie'; 
    }  
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!'; 
      } else {
        return 'You won!'; 
      }
    } 
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!'; 
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!'; 
      } else {
        return 'You won!'; 
      }
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper'); 
    if (userChoice === null) return; // Exit the function if userChoice is invalid
    const computerChoice = getComputerChoice(); 
    console.log('You threw: ' + userChoice); 
    console.log('The computer threw: ' + computerChoice); 
    console.log(determineWinner(userChoice, computerChoice)); 
  }
  
  playGame();
  