// Minimum Difference Between Highest and Lowest of K Scores
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length < 2) {
        return 0
    }
    result = Infinity
    nums.sort((a,b)=>b-a);
    console.log(nums);
    for(i=0;i<nums.length-1;i++) {
        if (nums[i] - nums[i + k - 1] < result) {
          result = nums[i] - nums[i + k - 1];
        }
    }
    return result
};

console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918], 6));  //74560