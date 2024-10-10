function createPhoneNumber(numbers) {
    // Ensure the input array is exactly 10 numbers
    if (numbers.length !== 10) {
      return 'Invalid input';
    }
    
    // Format the numbers as a phone number string
    let formattedPhoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    
    return formattedPhoneNumber;
  }
  
  // Example usage
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(createPhoneNumber(numbersArray));  // Output: (123) 456-7890

  
  