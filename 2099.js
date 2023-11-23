// Find Subsequence of Length K With the Largest Sum

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    nums.sort((a,b)=>{return a-b})
    return nums.splice(k,nums.length-k)
};

console.log(maxSubsequence([-1, -2, 3, 4], 3));