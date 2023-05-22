// Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    arr = []
    value = ''
    for(i=0;i<s.length;i++){
        if(s[i] === '(') {
            arr.push(')')
        } else if(s[i] === '[') {
            arr.push(']')
        } else if(s[i] === '{') {
            arr.push('}')
        } else {
            value = arr.pop()
            if(value !== s[i]) {
                return false
            }
        } 
    }
    return Boolean(!arr.length)
};

console.log(isValid("()[]{}"))
console.log(isValid("(]"))