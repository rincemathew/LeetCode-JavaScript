// Remove Trailing Zeros From a String

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    counter = 0
    for(i=num.length-1;i>=0;i--) {
        if(num[i] === '0') {
            counter++
        } else {
            break;
        }
    }
    return num.slice(0,num.length-counter)
    // return num.replace(/0+$/, '');
};

console.log(removeTrailingZeros("51230100"))
console.log(removeTrailingZeros("123"))