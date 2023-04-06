// Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.


/**
 * @param {number} n
 * @return {number}
 */

var smallestEvenMultiple = function(n) {
    let i = 1;
    while (true) {
        if (i % n == 0 && i % 2 == 0 ) {
            return i
            break;
        }
        i++;
   }
};


// result
console.log(smallestEvenMultiple(5))
console.log(smallestEvenMultiple(6))