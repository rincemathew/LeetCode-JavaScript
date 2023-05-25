// Count the Digits That Divide a Number


/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    count = 0
    str = String(num)
    for(i=0;i<str.length;i++) {
        if(num % parseInt(str[i]) == 0) {
            count++
        }
    }
    return count
};


console.log(countDigits(1248))  //4