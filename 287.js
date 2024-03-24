
// Find the Duplicate Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        const index = Math.abs(nums[i])
        if(nums[index]<0)
            return index;
        else
            nums[index] = -nums[index];
    }
    return -1;
};