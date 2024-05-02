// Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let temp = []
    let maxd = 0
    for(i=0;i<s.length;i++) {
        if(s[i] === '(') {
            temp.push('a')
        }
        if(s[i] === ')') {
            temp.pop()
        }
        maxd = Math.max(maxd, temp.length)
    }
    return maxd
};