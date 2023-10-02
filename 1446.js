// Consecutive Characters

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    max = 1
    counter = 1
    for(i=1;i<s.length;i++) {
        if(s[i] == s[i-1]) {
            counter++
        } else {
            counter = 1
        }
        if(counter > max) {
            max = counter
        }
    }
    return max
};

console.log(maxPower("leetcode"))
console.log(maxPower("abbcccddddeeeeedcba"))