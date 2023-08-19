// Summary Ranges

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    reslt = []
    nums.push('#')
    value = 0
    for(i=1;i<nums.length;i++) {
        if(nums[i] - nums[value] !== i-value) {
            if(i-value>1) {
                reslt.push(nums[value] +"->" + nums[i-1])
            } else {
                reslt.push(String(nums[value])) 
            }
            value = i
        }
    }
    return reslt
};

console.log(summaryRanges([0,1,2,4,5,7])); //["0->2","4->5","7"]