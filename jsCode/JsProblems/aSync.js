// console.log("I'm learning about");

// for (let idx=0; idx < 999999999; idx++) {}

// // The second console.log() statement is
// // delayed by the for loop's execution
// console.log("the Event Loop");

// console.log("I'm learning about");

// for (let idx=0; idx < 999999999; idx++) {}

// // The second console.log() statement is
// // delayed by the for loop's execution
// console.log("the Event Loop");

console.log("This is the first line of code in app.js.");

function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);

console.log("This is the last line of code in app.js.");
