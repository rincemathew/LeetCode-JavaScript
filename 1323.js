// Maximum 69 Number

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    total = num
    num = num.toString().split('')
    for(i=0;i<num.length;i++) {
        newValue = [...num]
        if(newValue[i]=='9') {
            newValue[i] = '6'
        } else {
            newValue[i] = '9'
        }
        if(newValue.join('') > total) {
            total = newValue.join('')
        }
    }
    return total
};

console.log(maximum69Number(9669))  //9969