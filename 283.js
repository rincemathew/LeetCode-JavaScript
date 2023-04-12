/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
	return nums;
    // len = nums.length-1
    // for(i=0;i<len;i++) {
    //     if(nums[i]==0) {
    //         for(j=i;j<nums.length-1;j++) {
    //             temp = nums[j]
    //             nums[j] = nums[j+1]
    //             nums[j+1] = temp
    //         }
    //         i--
    //         len--
    //     }
    // }
    // return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,0,1]))