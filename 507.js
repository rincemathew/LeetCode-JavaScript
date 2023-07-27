// Perfect Number

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    total = 0
    for(i=0;i<num;i++) {
        if(num % i === 0) {
            total += i
        }
    }
    return num == total?true:false
    
};

console.log(checkPerfectNumber(28))
// console.log(checkPerfectNumber(7))