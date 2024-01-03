// Minimum Common Value

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let s = new Set(nums2);
  for (let i = 0; i < nums1.length; i++) {
    if (s.has(nums1[i])) {
      return nums1[i];
    }
  }
  return -1;
};
