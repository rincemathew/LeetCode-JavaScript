// Find Common Elements Between Two Arrays


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const result = []
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let temp = 0
    for(i=0;i<nums1.length;i++) {
        if(set2.has(nums1[i])) {
            temp++
        }
    }
    result.push(temp)
    temp = 0
    for (i = 0; i < nums2.length; i++) {
      if (set1.has(nums2[i])) {
        temp++;
      }
    }
    result.push(temp)
    return result
};

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));