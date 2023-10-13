// Count of Matches in Tournament

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    counter = 0
    while(n != 1) {
        counter = counter + Math.floor(n/2)
        n = Math.ceil(n/2) 
    }
    return counter
};

console.log(numberOfMatches(7))