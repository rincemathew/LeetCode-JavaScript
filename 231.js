// Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2^x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    value = 1
    if(n == 1) {
        return true
    } 
    while(n > value) {
        value = value * 2
        if(value == n) {
            return true
        }
    }
    return false
};


console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))