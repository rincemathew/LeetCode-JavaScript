// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length<0){
    //     return 0
    // }
    let num = 0 ;
    for (let i = 0; i<nums.length; i++ ){
        num^=nums[i]
    }
    return num
};

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))