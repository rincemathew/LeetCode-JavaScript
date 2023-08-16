// Backspace String Compare

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    s = s.split('')
    t = t.split('')
    sS = []
    tT = []
    let i = 0,j = 0
    while(i < s.length || j < t.length) {
        if(s[i] == '#') {
            sS.pop()
        } else {
            sS.push(s[i])
        }
        if(t[j] == '#') {
            tT.pop()
        } else {
            tT.push(t[i])
        }

        i++
        j++
    }
    if(sS.join('') === tT.join('')) {
        return true
    } else {
        return false
    }
};


console.log(backspaceCompare("ab#c","ad#c"))
console.log(backspaceCompare("ab##","c#d#"))