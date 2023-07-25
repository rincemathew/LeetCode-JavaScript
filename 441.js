// Arranging Coins

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    counter = 0
    while(n>counter) {
        counter++
        n = n - counter
    }
    return counter
};

console.log(arrangeCoins(5))