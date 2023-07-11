// Find Closest Number to Zero

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    nums.sort((a,b) => Math.abs(a) - Math.abs(b))
    if (nums.includes(Math.abs(nums[0]))) return Math.abs(nums[0]);
    return nums[0];
};

console.log(findClosestNumber([-4,-2,3,1,4,8]))