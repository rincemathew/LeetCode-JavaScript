// Minimum Operations to Exceed Threshold Value I
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let min= 0
    for(i=0;i<nums.length;i++) {
        if(nums[i] < k) {
            min++
        }
    }
    return min
};

