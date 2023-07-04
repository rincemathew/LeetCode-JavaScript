// Sum Multiples

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    nums = 0
    for(i=0;i<=n;i++) {
        if(i%3==0 || i%5==0 || i%7==0) {
            nums = nums + i
        }
    }
    return nums
};

console.log(sumOfMultiples(7)) //21