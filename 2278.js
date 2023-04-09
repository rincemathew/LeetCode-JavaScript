// Percentage of Letter in String

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    count = 0
    for(i=0;i<s.length;i++) {
        s[i] == letter ? count++ : ''
    }
    return parseInt((count/s.length) * 100)
};

console.log(percentageLetter("foobar", "o"))
console.log(percentageLetter("jjjj", "k"))