// Split the Array

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const map = new Map()

    for(i=0;i<nums.length;i++) {
        if(map.has(nums[i])) {
            map.set(nums[i],map.get(nums[i])+1)
        } else {
            map.set(nums[i],1)
        }

        if(map.get(nums[i])===3) {
            return false
        }
    }
    return true
};

console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
console.log(isPossibleToSplit([1, 1, 1, 1, 1, 1]));