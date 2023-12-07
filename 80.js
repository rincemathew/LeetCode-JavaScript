// Remove Duplicates from Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(i=0;i<nums.length-2;i++) {
        let j = i + 1
        if(nums[i] === nums[j]) {
            while(nums[j] == nums[j+1]) {
                nums.splice(j+1,1)
            }
        }
    }
};