// Power of Four

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n===4) {
        return true
    }
    if(n < 4) {
        return false
    }
    return isPowerOfFour(n/4)
};

console.log(isPowerOfFour(16)) //true