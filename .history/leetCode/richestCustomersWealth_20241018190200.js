var maximumWealth = function(accounts) {
    if (accounts.length === 0) {
       return 0; // Return 0 when there are no customers
    }
    
    let wealths = accounts.map(account => account.reduce((sum, value) => sum + value, 0)); 
    let maxWealth = Math.max(...wealths); 
    return maxWealth;
 }
 
 // Define the accounts array BEFORE calling maximumWealth
 let accounts = [
    [1, 5],       // Customer 1 wealth: 1 + 5 = 6
    [7, 3],       // Customer 2 wealth: 7 + 3 = 10
    [3, 5]        // Customer 3 wealth: 3 + 5 = 8
 ];
 
 console.log(maximumWealth(accounts)); // Output: 10
 

 