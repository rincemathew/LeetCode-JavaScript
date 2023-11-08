// Maximum Product Difference Between Two Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>a-b)
    return (nums[nums.length-1] * nums[nums.length-2]) - (nums[1]*nums[0])
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));