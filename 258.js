// Add Digits

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var num = num.toString()
    var total = 0
    for(i=0;i<num.length;i++) {
        total += Number(num[i])
    }
    if(num.length < 2) {
        return num
    }
    return addDigits(total)
};

console.log(addDigits(38))  //2