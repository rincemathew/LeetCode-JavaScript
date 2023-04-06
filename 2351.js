// First Letter to Appear Twice
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// Note:
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let arr = s.split('')
    let output ='';
    let temp = 101;
    for(i=0;i<arr.length-1;i++) {
        for(j=i+1;j<arr.length;j++) {
            if(arr[i] == arr[j] && (j-i)<temp) {
                temp = j-i
                output = arr[i]
            }
        }
    }
    return output
};

console.log(repeatedCharacter("abccbaacz"))
console.log(repeatedCharacter("abcdd"))