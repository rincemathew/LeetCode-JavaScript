// Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let temp = 0
    for(i=0;i<nums.length;i++) {
        temp += nums[i]
        nums[i] = temp
    }
    return nums
};

console.log(runningSum([1,2,3,4]))  //[1,3,6,10]
console.log(runningSum([1,1,1,1,1]))  //[1,2,3,4,5]
