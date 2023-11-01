// Minimum Operations to Make the Array Increasing

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    if(nums.length === 1) {
        return 0
    }
    let value = nums[0]
    let result = 0
    for(i=1;i<nums.length;i++){
        if(nums[i] <= value) {
            result = result + (value-nums[i]+1)
            value = value + 1
        } else {
            value = nums[i]
        }
    }
    return result
};

console.log(minOperations([1, 5, 2, 4, 1]));