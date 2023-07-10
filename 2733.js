// Neither Minimum nor Maximum

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    min = Math.min(...nums)
    max = Math.max(...nums)

    for(i=0;i<nums.length;i++) {
        if(nums[i] != min && nums[i] != max) {
            return nums[i]
        }
    }
    return -1
};

console.log(findNonMinOrMax([3,2,1,4]))