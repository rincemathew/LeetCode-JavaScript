// Buy Two Chocolates
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b)
    if((prices[0]+prices[1]) > money) {
        return money
    } else {
        return Math.abs(prices[0] + prices[1] - money)
    }
};

console.log(buyChoco([1, 2, 2],3));
console.log(buyChoco([3, 2, 3],3));