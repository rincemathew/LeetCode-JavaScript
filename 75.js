// Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = nums.length-1
    incrementValue = 0
    for(i=0;i<=count;i++) {
        
        if(nums[i] == 0) {
            temp = nums[i]
            nums[i] = nums[incrementValue]
            nums[incrementValue] = temp
            incrementValue++
        }
        else if(nums[i] == 2) {
            temp = nums[i]
            nums[i] = nums[count]
            nums[count] = temp
            i--
            // [nums[count],nums[i]] = [nums[i],nums[count]]
            count--
        }
        console.log(nums)
    }
    return nums
};

// console.log(sortColors([2,0,2,1,1,0]))  //[0,0,1,1,2,2]
console.log(sortColors([0,1,0]))  