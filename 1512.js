// Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1; j<nums.length;j++) {
            if(nums[i] == nums[j]) {
                count++
            }
        }
    }
    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3]))