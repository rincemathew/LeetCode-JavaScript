// Divide a String Into Groups of Size k

/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    while(s.length%k !== 0) {
        s+=fill
    }
    return s.match(new RegExp('.{1,' + k + '}', 'g'));
};

console.log(divideString("abcdefghi", 3, "x"))