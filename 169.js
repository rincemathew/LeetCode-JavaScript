// Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    major = nums[0]
    count = 1
    for(i=1;i<nums.length;i++) {
        if(count == 0) {
            count++
            major = nums[i]
        } else if(major == nums[i]) {
            count++
        } else {
            count--
        }
    }
    return major
};


console.log(majorityElement([2,2,1,1,1,2,2]))