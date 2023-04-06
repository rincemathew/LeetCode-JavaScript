// Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    len = Math.max(word1.length, word2.length);
    newArr = []
    for(i=0; i <len; i++) {
        word1[i] ? newArr.push(word1[i]):''
        word2[i] ? newArr.push(word2[i]):''
    }
    return newArr.join('')
};

console.log(mergeAlternately("abc","pqr")) //"apbqcr"
console.log(mergeAlternately("ab","pqrs"))  //"apbqrs"
console.log(mergeAlternately("abcd","pq"))  //"apbqcd"