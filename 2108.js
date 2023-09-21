// Find First Palindromic String in the Array

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(i=0;i<words.length;i++) {
        if(words[i] === words[i].split("").reverse().join("")) {
            return words[i]
        }
    }
    return ""
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))