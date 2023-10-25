// Calculate Money in Leetcode Bank

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let i = 0
    let j = 1
    let f = 2
    let total = 0
    while(i < n) {
        total = total + j
        j++
        i++
        if(i%7===0) {
            j = f
            f++
        }
    }
    return total
};

console.log(totalMoney(20))