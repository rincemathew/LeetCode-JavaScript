// Generate a String With Characters That Have Odd Counts

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    res = Array(n).fill('y')
    if(n%2===0) {
        res[0] = 'x'
    }
    return res.join('')
};


console.log(generateTheString(4))
console.log(generateTheString(5))