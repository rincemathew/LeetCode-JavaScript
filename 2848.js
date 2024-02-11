// Points That Intersect With Cars
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const set = new Set()
    for(i=0;i<nums.length;i++) {
        let temp = nums[i][0]
        while(temp <= nums[i][1]) {
            set.add(temp)
            temp++
        }
    }
    return set.size
};

console.log(numberOfPoints([[3,6],[1,5],[4,7]]))