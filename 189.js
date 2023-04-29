// Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = [...nums]
    
    for(let i=0; i<temp.length; i++){
        let p = (i+k) % temp.length  
        nums[p] = temp[i]
    }
    return nums
};

// console.log(rotate([1,2,3,4,5,6,7],3))  //[5,6,7,1,2,3,4]
// console.log(rotate([1,2,3,4,5,6,7,8],3))  //[5,6,7,1,2,3,4]
// console.log(rotate([-1,-100,3,99],2))  //[3,99,-1,-100]
console.log(rotate([1,2,3,4,5,6],1)) 
