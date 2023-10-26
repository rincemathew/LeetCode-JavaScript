// Check if Array Is Sorted and Rotated

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  let length = nums.length - 1;
  for (let i = 0; i < length; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count > 1 || (count == 1 && nums[0] < nums[length])) {
    return false;
  }
  return true;
};

console.log(check([2, 1, 3, 4]));
