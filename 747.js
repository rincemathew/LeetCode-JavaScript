// Largest Number At Least Twice of Others

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    max = Math.max(...nums)
    index = nums.indexOf(Math.max(...nums));
    result = true

    for(i=0;i<nums.length;i++) {
        if(nums[i] !== max && (nums[i]*2) > max) {
            result = false
        }
    }
    return (result)?index:-1
    
};

console.log(dominantIndex([3,6,1,0]))