// Count Prefixes of a Given String

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    counter = 0
    for(i=0;i<words.length;i++) {
        if(words[i] === s.slice(0,words[i].length)) {
            counter++
        }
    }
    return counter
};

console.log(countPrefixes(["a","b","c","ab","bc","abc"], "abc"))
console.log(countPrefixes(["a","a"], "aa"))