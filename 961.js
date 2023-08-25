// N-Repeated Element in Size 2N Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const set = new Set()
    for(i=0;i<nums.length;i++) {
        if(set.has(nums[i])) {
            return nums[i]
        } else{
            set.add(nums[i])
        }
    }
};

console.log(repeatedNTimes([1,2,3,3]))