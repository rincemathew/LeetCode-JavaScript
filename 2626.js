// Array Reduce Transformation


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    sum = init
    for(curr of nums) {
        sum = fn(sum, curr)
    }
    return sum
};

console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },0)) //10