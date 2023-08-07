// Smallest Range I
//this has some mistake in leetcode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    // smallest = nums[0]
    // largest = nums[0]
    // sum = nums[0]
    // let average
    // for(i=1;i<nums.length;i++) {
    //     if(nums[i] > largest) {
    //         largest = nums[i]
    //     }
    //     if(nums[i] < smallest) {
    //         smallest = nums[i]
    //     }
    //     sum += nums[i]
    // } 
    // average = Math.ceil(sum/nums.length) 
    // // console.log(smallest,largest,average)
    // if(smallest+k >= average) {
    //     smallest = average
    // } else {
    //     smallest = smallest + k
    // }

    // if(largest-k <= average) {
    //     largest = average
    // } else {
    //     largest = largest - k
    // }

    // return largest - smallest

    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    if (max - min <= 2*k) return 0;
    return max - min - 2*k;
};

console.log(smallestRangeI([1,3,6],3))