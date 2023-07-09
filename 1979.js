// Find Greatest Common Divisor of Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    min = Math.min(...nums)
    max = Math.max(...nums)
    for(i=min;i>0;i--) {
        if(max%i==0 && min%i==0) {
            return i
        }
    }
};


console.log(findGCD([2,5,6,9,10]))