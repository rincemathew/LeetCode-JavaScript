/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('')
    t = t.split('')
    for(i=0;i<t.length;i++) {
        let newShu = false
        for(j=0;j<s.length;j++) {
            if(t[i] == s[j] && s[j] !== true) {
                s[j] = true
                newShu = true
                break;
            }
        }
        if(newShu === false) {
            return t[i]

        }
    }
};

// console.log(findTheDifference("abcd","abcde"))
// console.log(findTheDifference("","y"))
console.log(findTheDifference("a","aa"))