// Set Mismatch

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const duplicate = new Set();
    const original = new Set(nums);
    let result = []
    for(i=0;i<nums.length;i++) {
        if(duplicate.has(nums[i])) {
            result.unshift(nums[i])
        } else {
            duplicate.add(nums[i])
        }
        if(!original.has(i+1)){
            result.push(i+1)
        }
    }
return result
};

console.log(findErrorNums([1,2,2,4]));