/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    obj = {}
    s = s.split(" ")
    console.log(s)
    for(i=0;i<pattern.length;i++) {
        if(!obj.hasOwnProperty(pattern[i])) {
            obj.pattern[i] = s[i]
        }
        console.log(obj)
        // if(obj.pattern[i] != s[i]) {
        //     return false
        // }
    }
    return true
};

console.log(wordPattern("abba","dog cat cat dog"))
console.log(wordPattern("abba","dog cat cat fish"))