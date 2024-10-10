

function bonus(salary, bonus) {
    let pay;
    if (bonus === true) {
        pay = salary * 10; // Multiply salary by 10 if bonus is true
        console.log(`$${pay}`); // Output the total pay with the bonus
    } else {
        console.log("You did not make a bonus. womp womp");
    }
}

// Example usage
bonus(50000, true);  // Outputs: $500000
bonus(50000, false); // Outputs: You did not make a bonus. womp womp

