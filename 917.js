// Reverse Only Letters

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    reversed = []
    j = s.length-1
    i=0;
    while(i < s.length) {
        if(s[i].toLowerCase() !== s[i].toUpperCase()) {
            if(s[j].toLowerCase() !== s[j].toUpperCase()) {
                reversed[j] = s[i]
                j--
                i++
            } else {
                j--
            }
        } else {
            reversed[i] = s[i]
            i++
        }
    }
    return reversed.join('')
};

console.log(reverseOnlyLetters("ab-cd")); //"dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));  //"j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));  // "Qedo1ct-eeLg=ntse-T!"