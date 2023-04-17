// Difference Between Element Sum and Digit Sum of an Array

/**You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element = 0,digit = 0;
    let str = nums.join('')
    for(i=0;i<str.length;i++) {
        digit = digit+parseInt(str[i])
        if(i<nums.length){
            element = element + nums[i]
        }
    }
    // for(i=0;i<nums.length;i++) {
    //     element = element + nums[i]
    // }
    return element - digit
};


console.log(differenceOfSum([1,15,6,3]))