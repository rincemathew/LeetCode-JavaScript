
//  Water Bottles
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drunk=numBottles;
    while(numBottles>=numExchange)
    {
        let exchange=Math.floor(numBottles/numExchange);
        numBottles=exchange+(numBottles%numExchange);
        drunk=drunk+exchange;
    }
    return drunk
};