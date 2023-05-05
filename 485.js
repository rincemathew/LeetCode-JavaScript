// Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    counter = 0
    maxValue = 0
    for(i=0;i<nums.length;i++) {
        if(nums[i] === 1) {
            counter++
        } else {
            counter = 0
        }
        if(maxValue < counter) {
            maxValue = counter
        }
    }
    return maxValue
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))  //3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))  //2