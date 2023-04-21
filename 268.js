// Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    total = 0
    count = 0
    for(i=0;i<nums.length;i++) {
        total += nums[i]
        count += i
    }
    count += nums.length
    return count - total
};

console.log(missingNumber([3,0,1])) //2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8