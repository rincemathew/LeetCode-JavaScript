// Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return Boolean(s.split('').sort().join() === t.split('').sort().join())
    // if(s.length != t.length) {
    //     return false
    // }
    // s = s.split('')
    // t = t.split('')
    // for(i=0;i<s.length;i++) {
    //     isFalse = false
    //     for(j=0;j<t.length;j++) {
    //         if(s[i] == t[j] && t[j] != -1) {
    //             t[j] = -1
    //             isFalse = true
    //             break
    //         }
    //     }
    //     if(!isFalse) {
    //         return false
    //     }
    // }
    // return true
};


console.log(isAnagram("anagram","nagaram"))