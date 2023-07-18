// Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const obj = new Map([])
    s = s.split(" ")
    for(i=0;i<pattern.length;i++) {
        if(!obj.has(pattern[i])) {
            obj.set(pattern[i],s[i])
        }
        console.log(obj)
        if(obj.get(pattern[i]) !== s[i]) {
            return false
        }
    }
    return true
};

console.log(wordPattern("abba","dog cat cat dog"))
console.log(wordPattern("abba","dog cat cat fish"))