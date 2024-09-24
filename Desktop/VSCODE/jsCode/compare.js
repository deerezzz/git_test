let bobsFollowers = [' Adam', 'Bob', ' Charlie', 'Danielle']; 
let tinasFollowers = [' Adam', 'Bill', ' Charlie']; 
let mutualFollowers = []; 

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
       mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers); 




// iterating through followers to see if any of them have the same friends or match, this can work with strings or numbers. 
// The first for-loop iterates through bobs followers and starts at zero and once it reaches the end of the elements in the array it 
// will stop executing and go to the next for loop which does the same thing to tinas followers. Then the if-statement will check 
// bobs followers which is saved in array 'i' and if it is equals to tinas followers saved in array 'j'. If it is TRUE it will then 
// add the same elements to mutualfollowers empty array. 

