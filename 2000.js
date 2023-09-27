// Reverse Prefix of Word

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    result = []
    checker = true
    for(i=0;i<word.length;i++) {
        if(word[i] === ch && checker === true) {
            result = result.reverse()
            result.unshift(word[i])
            checker = false
        } else {
            result.push(word[i])
        }
    }
    return result.join('')
};

console.log(reversePrefix("abcdefd", "d"))