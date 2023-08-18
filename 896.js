// Monotonic Array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = true
    let decreasing = true
    if(nums.length < 3) {
        return true
    }

    for(i=1;i<nums.length;i++) {
        if(nums[i] > nums[i-1]) {
            decreasing = false
        }
        if(nums[i] < nums[i-1]) {
            increasing = false
        }
    }
    return increasing || decreasing
};


console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([1,3,2]))