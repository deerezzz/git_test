
// Function to generate a random password
function generatePassword(length, options) {
    const characters = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        special: '!@#$%^&*()_+[]{}|;:,.<>?/'
    };

    let characterPool = '';
    if (options.lowercase) characterPool += characters.lowercase;
    if (options.uppercase) characterPool += characters.uppercase;
    if (options.numbers) characterPool += characters.numbers;
    if (options.special) characterPool += characters.special;

    if (characterPool.length === 0) {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}

// Example usage:
const length = 12; // Length of the password
const options = {
    lowercase: true,
    uppercase: true,
    numbers: true,
    special: true
};

console.log('Generated Password:', generatePassword(length, options));
