// Count Number of Pairs With Absolute Difference K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    count = 0
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] > nums[j]) {
                if(nums[i] - nums[j] === k) {
                    count++
                }
            } else {
                if(nums[j] - nums[i] === k) {
                    count++
                }
            }
        }
    }
    return count
};


console.log(countKDifference([1,2,2,1], 1))  //4