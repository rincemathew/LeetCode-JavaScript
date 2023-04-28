/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k = 0 
    expectedNums = []
    for(i=0;i<nums.length;i++) {
        if(nums[i] != nums[i+1]) {
            // console.log(nums[i])
            nums[k] = nums[i]
            k++
        }
    }
    return k
};


console.log(removeDuplicates([1,1,2]))  //2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))  //5
