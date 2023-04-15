/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split('').reverse().join('')
};

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("God Ding"))