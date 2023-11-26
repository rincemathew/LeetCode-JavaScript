// Remove One Element to Make the Array Strictly Increasing

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    count = 0;
    for (i = 1; i < nums.length; i++) {
      if (nums[i - 1] >= nums[i]) {
        count++;
        if (i > 1 && nums[i] <= nums[i - 2]) nums[i] = nums[i - 1];
      }
    }
    return count <= 1;
};

console.log(canBeIncreasing([1,2,10,5,7])) //true
console.log(canBeIncreasing([2, 3, 1, 2])); //false