// Max Pair Sum in an Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let maxSum = -1
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(String(nums[i])===String(nums[j]).split('').reverse().join('')) {
                maxSum = Math.max(maxSum,nums[i]+nums[j])
            }
        }
    }
    return maxSum
};

console.log(maxSum([51, 71, 17, 24, 42])); //88
console.log(maxSum([1, 2, 3, 4])); //-1