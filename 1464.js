// Maximum Product of Two Elements in an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // maxOne = nums[0];
    // maxTwo = nums[0];

    // for(i=1;i<nums.length;i++) {
    //     if(nums[i] >= maxOne) {
    //         maxTwo = maxOne
    //         maxOne = nums[i]
            
    //     }
    //     if(nums[i] <= maxOne && nums[i] > maxTwo) {
    //         maxTwo = nums[i]
    //     }
    // }
    nums.sort((a,b)=>b-a)
    console.log(nums)
    return (nums[0]-1) * (nums[1]-1)
};


console.log(maxProduct([10,2,5,2]))