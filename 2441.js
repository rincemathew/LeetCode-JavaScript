// Largest Positive Integer That Exists With Its Negative

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    i = 0
    j = nums.length-1
    while(i<j) {
        if(nums[i] > 0 || nums[j] < 0) {
            return -1
        }
        if(Math.abs(nums[i]) == nums[j]) {
            return Math.abs(nums[i])
        }
        if(Math.abs(nums[i]) >= nums[j]) {
            i++
        } else {
            j--
        }
    }
    return -1
};

console.log(findMaxK([-1,2,-3,3]))