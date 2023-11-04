// Minimum Distance to the Target Element

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let min = Infinity
    for(i=0;i<nums.length;i++) {
        if(nums[i] === target) {
            min = Math.min(min, Math.abs(i - start));
        }
    }
    return min
};

console.log(
  getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0)
);