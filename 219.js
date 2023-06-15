// Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map1 = new Map()
    for(i=0;i<nums.length;i++) {
        if (i - map1.get(nums[i]) <= k) {
            return true;
          }
          map1.set(nums[i], i);
   }
    return false
};


console.log(containsNearbyDuplicate([1,2,3,1],3))