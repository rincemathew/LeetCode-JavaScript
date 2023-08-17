// Create Target Array in the Given Order

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    result = []
    for(i=0;i<nums.length;i++) {
        result.splice(index[i],0,nums[i])
    }
    return result
};


console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))