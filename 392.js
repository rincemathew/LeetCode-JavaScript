// Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s == "") {
        return true
    }
    counter = 0
    for(i=0;i<t.length;i++) {
        if(s[counter] == t[i]) {
            counter++
        }
        if(counter == s.length) {
            return true
        }
    }
    return false
};

console.log(isSubsequence("abc","ahbgdc"))