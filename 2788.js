// Split Strings by Separator
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let res = words.join(separator).split(separator);
    // res = res.filter(Boolean);
    return res
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"],"."));