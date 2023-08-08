// Calculate Delayed Arrival Time

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    total = arrivalTime + delayedTime
    while(total >= 24) {
        total = total - 24
    }
    return parseInt(total)

    // return (arrivalTime + delayedTime) % 24;
};

console.log(findDelayedArrivalTime(15,5))
console.log(findDelayedArrivalTime(13,11))