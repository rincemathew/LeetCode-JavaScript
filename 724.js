// Find Pivot Index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    sum = 0
    leftSum = 0

    for(num of nums) {
        sum += num
    }
    // console.log(sum)
    for(i=0;i<nums.length;i++) {
        // console.log(leftSum,sum-nums[i])
        if(leftSum == (sum - leftSum - nums[i])) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
    // console.log(sum)

};

console.log(pivotIndex([1,7,3,6,5,6]))  //3