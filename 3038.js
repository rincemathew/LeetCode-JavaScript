// Maximum Number of Operations With the Same Score I

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let len = nums.length%2===0?nums.length:nums.length-1
    let maxOp = 1
    let total = nums[0] + nums[1]

    for(let i=2;i<len;i+=2) {
        if((nums[i]+nums[i+1])===total) {
            maxOp++
        }else {
            break;
        }
    }
    return maxOp
};

console.log(maxOperations([3, 2, 1, 4, 5]));
console.log(maxOperations([3, 2, 6, 1, 4]));