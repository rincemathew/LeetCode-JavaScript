// Existence of a Substring in a String and Its Reverse

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let resverse = s.split('').reverse().join('');
    
    for(i=0;i<s.length-1;i++) {
        if(resverse.includes(s[i]+s[i+1])) {
            return true
        }
    }
    return false
};

console.log(isSubstringPresent("leetcode"));
console.log(isSubstringPresent("abcd"));