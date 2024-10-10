function filter_list(l) {
    // Return a new array with the strings filtered out
    
        // Filter to get only numbers
      return l.filter(element => typeof element === 'number');
    }
  
  
    
    const array1 = [1,2,'a','b'];
    const array2 = [1,'a','b',0,15];
    const array3 = [1,2,'aasf','1','123',123];
    
    // Filter numbers from each array
    const numbersFromArray1 = filter_list(array1);
    const numbersFromArray2 = filter_list(array2);
    const numbersFromArray3 = filter_list(array3);
    
    // Log results separately
    console.log('Numbers from array1:', numbersFromArray1); // Output: [1, 3]
    console.log('Numbers from array2:', numbersFromArray2); // Output: [4, 6]
    console.log('Numbers from array3:', numbersFromArray3); // Output: [7, 9]
    