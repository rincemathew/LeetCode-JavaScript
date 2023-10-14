// Reverse Words in a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ')
    console.log(s)
    result = []
    for(i=0;i<s.length;i++) {
        if(s[i] !== '') {
            result.push(s[i])
            result.push(' ')
        }
    }
    result.pop()
    return result.reverse().join('')

};

console.log(reverseWords("example good a"))