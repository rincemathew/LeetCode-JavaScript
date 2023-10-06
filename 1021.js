// Remove Outermost Parentheses

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    counter = 0
    result = ""
    for(i=0;i<s.length;i++) {
        if(s[i] === "(") {
            if(counter) {
                result+= s[i]
            } 
            counter++
        } else {
            counter--
            if(counter) {
                result+= s[i]
            }
        }
    }
    return result
};

console.log(removeOuterParentheses("(()())(())"))  //"()()()"
console.log(removeOuterParentheses("(()())(())(()(()))"))  //"()()()()(())"