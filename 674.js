// Longest Continuous Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    subArrLeng = 1
    counter = 1
    for(i=0;i<nums.length-1;i++) {
        if(nums[i] < nums[i+1]) {
            counter++
        } else {
            counter = 1
        }
        if(subArrLeng < counter) {
            subArrLeng = counter
        }
    }
    return subArrLeng
};

console.log(findLengthOfLCIS([1,3,5,4,7]))
// console.log(findLengthOfLCIS([1,3,5,4,7]))