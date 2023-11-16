// Maximum Difference Between Increasing Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    max = 0
    temp = nums[0]
    for(i=1;i<nums.length;i++) {
        if(max < (nums[i] - temp)) {
            max = nums[i] - temp
        }
        if(temp > nums[i]) {
            temp = nums[i]
        }
    }
    return max || -1
};

console.log(maximumDifference([7, 1, 5, 4])); //4
console.log(maximumDifference([9, 4, 3, 2])); //-1
console.log(maximumDifference([1, 5, 2, 10])); //9
