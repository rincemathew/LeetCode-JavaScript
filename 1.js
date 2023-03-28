// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
};

//result
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))