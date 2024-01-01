// Alternating Digit Sum

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let sum = 0
    n = n.toString().split('')
    for(i=0;i<n.length;i++) {
        if(i%2===0) {
            sum += parseInt(n[i]);
        } else {
            sum -= parseInt(n[i]);
        }
    }
    return sum
};

console.log(alternateDigitSum(521))
console.log(alternateDigitSum(111));
console.log(alternateDigitSum(886996));