// Maximum Number of Words You Can Type

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    counter = 0
    brokenLetters = brokenLetters.split('')
    text = text.split(' ')
    return text.filter((word) => {
        return brokenLetters.every((evr) =>!word.includes(evr))
    }).length
};

console.log(canBeTypedWords("hello world", "ad")) //1
console.log(canBeTypedWords("leet code", "lt"))  //1
console.log(canBeTypedWords("leet code", "e"))  //0