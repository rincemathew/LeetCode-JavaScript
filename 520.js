// Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toLowerCase() || word === word.toUpperCase()) {
        return true
    }
    if(word === word[0].toUpperCase() + word.slice(1).toLowerCase()) {
        return true
    }
    return false
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("leetcode"))
console.log(detectCapitalUse("Google"))