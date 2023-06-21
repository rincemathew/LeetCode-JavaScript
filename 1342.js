// Number of Steps to Reduce a Number to Zero

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    counter = 0
    while(num>0) {
        if(num%2==0) {
            num = num/2
            counter++
        } else {
            num = num - 1
            counter++
        }
    }
    return counter
};

console.log(numberOfSteps(14))