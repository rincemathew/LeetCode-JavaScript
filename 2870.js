// Minimum Number of Operations to Make Array Empty

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const map = new Map()
    let result = 0
    for(let i=0;i<nums.length;i++) {
        if(map.has(nums[i])) {
            map.set(nums[i],map.get(nums[i])+1)
        } else {
            map.set(nums[i],1)
        }
    }
    for (const x of map.values()) {
      if (x === 1) {
        return -1;
      } else {
        result += Math.ceil(x / 3);
      }
    }
    return result
};

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4])); //4
console.log(minOperations([2, 1, 2, 2, 3, 3])); //-1