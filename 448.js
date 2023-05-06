// Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    len = nums.length
    nums =new Set(nums)
    arr = []
    // console.log(nums)
    for(i=1;i<=len;i++) {
        if(!nums.has(i)) {
            arr.push(i)
        }
    }
    return arr
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))