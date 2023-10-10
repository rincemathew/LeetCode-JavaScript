// Thousand Separator

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    n = String(n)
    if(n.length < 4) {
        return n
    }
    j = 0
    i = n.length-1
    result = ""
    while(0 <= i) {
        if(j === 3) {
            j=0
            result += "."
        }
        result += n[i]
        i--
        j++
    }
    return result.split('').reverse().join('')
};

console.log(thousandSeparator(1234))