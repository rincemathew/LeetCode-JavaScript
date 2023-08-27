// Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    result = []
    start = 0
    end = nums.length-1
    counter = nums.length-1

    while(start <= end) {
        if(nums[start]**2 > nums[end]**2) {
            result[counter] = nums[start]**2
            start++
        } else {
            result[counter] = nums[end]**2
            end--
        }
        counter--
    }
    return result
};

console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]