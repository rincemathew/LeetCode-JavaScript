// Subtract the Product and Sum of Digits of an Integer

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('')
    sum = 0
    multi = 1
    for(val of n) {
        sum = sum + Number(val)
        multi = multi * Number(val)
    }
    return multi-sum
};

console.log(subtractProductAndSum(234))