// Decompress Run-Length Encoded List

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    result = []
    for(i=0;i<nums.length;i+=2) {
        count = 0
        while(count < nums[i]) {
            result.push(nums[i+1])
            count++
        }
    }
    return result
};

console.log(decompressRLElist([1,2,3,4]))