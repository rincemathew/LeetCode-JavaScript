// Decrypt String from Alphabet to Integer Mapping

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    result = []
    for(i=s.length-1;i>=0;i--) {
        if(s[i] === '#') {
            len = Number(s[i-2]+s[i-1]) + 96
            i = i-2
        } else {
            len = Number(s[i]) + 96;
        }
        result.unshift(String.fromCharCode(len))
    }
    return result.join('')
};

console.log(freqAlphabets("10#11#12"));