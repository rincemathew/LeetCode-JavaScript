
// Water Bottles II

var maxBottlesDrunk = function(numBottles, numExchange) {

    let drank = numBottles
    let extraDrank = 0

    while(numBottles >= numExchange) {
        numBottles = numBottles-numExchange;
        numExchange = numExchange + 1;
        extraDrank = extraDrank + 1;
        numBottles = numBottles +1
        // console.log(numBottles,numExchange,extraDrank)
    }

    return drank + extraDrank
    
};


console.log(maxBottlesDrunk(13, 6))