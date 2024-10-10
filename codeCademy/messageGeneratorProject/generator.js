// Step 1: Create an object of arrays of quotes
const quotes = {
    signInfo: ["The only limit to our realization of tomorrow is our doubts of today."],
    fortuneOutput: ["Life is 10% what happens to us and 90% how we react to it."],
    advice: ["Change your thoughts and you change your world."],
    future: ["The best way to predict the future is to create it."],
    success: ["Success is not the key to happiness. Happiness is the key to success."]
};

// Function to generate a random index for a given array
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function to generate a random quote from a given category
function generateRandomQuote(category) {
    const quotesArray = quotes[category];
    const randomIndex = getRandomIndex(quotesArray);
    return quotesArray[randomIndex];
}

// Store the 'Quotes' in an array
let personalQuotes = [];

// Iterate over the object
for (let prop in quotes) {
    let quote = generateRandomQuote(prop);
    
    // Use the object's properties to customize the message being added to personalQuotes
    switch (prop) {
        case 'signInfo':
            personalQuotes.push(`Your sign right now is: "${quote}".\n`);
            break;
        case 'fortuneOutput':
            personalQuotes.push(`Random Quote: "${quote}".\n`);
            break;
        case 'advice':
            personalQuotes.push(`Your advice for the day is: "${quote}".\n`);
            break;
        case 'future':
            personalQuotes.push(`Your advice for the future is: "${quote}".\n`);
            break;
        case 'success':
            personalQuotes.push(`Your advice for success is: "${quote}".\n`);
            break;
        default:
            personalQuotes.push('There is not enough info.\n');
    }
}

// Function to format and log the quotes
function formatWisdom(wisdom) {
    const formatted = wisdom.join('\n');
    console.log(formatted);
    return formatted;
}

// Call the function to format and display the quotes
formatWisdom(personalQuotes);

