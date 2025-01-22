

//Speed Limit = 70 
// 5 -> 1 point 
// Every 5 kilometers give the driver one point. Use math.floor, converts to the greatest integer. 


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    //Condition for OK: 

    if (speed <= speedLimit) {
        console.log("OK");
        return;
    }

    // Calculate points for exceeding the limit
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${points}`);
    }
}

checkSpeed(50);  // Output: "OK"
checkSpeed(75);  // Output: "Points: 1"
checkSpeed(85);  // Output: "Points: 3"
checkSpeed(135); // Output: "License suspended"
