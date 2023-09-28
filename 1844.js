// Replace All Digits with Characters

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    result = ''
    for(i=0;i<s.length;i++) {
        if(i % 2 !== 0) {
            value = s.charCodeAt(i-1) + Number(s[i])
            if(value > 122) {
                value = value - 122 + 96
            }
            result += String.fromCharCode(value)
        } else {
            result += s[i]
        }
    }
    return result
};

console.log(replaceDigits("z1c1e1")) //"abcdef"