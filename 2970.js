// Count the Number of Incremovable Subarrays I
/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  let count = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j + i > nums.length) continue;
      const arr = nums.slice();
      arr.splice(j, i);
      if (checkIfValid(arr)) count++;
    }
  }
  return count;
};

const checkIfValid = (arr) => {
  if (arr.length <= 1) return true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
};

// console.log(incremovableSubarrayCount([1, 2, 3, 4])); //10
// console.log(incremovableSubarrayCount([6, 5, 7, 8])); //7
console.log(incremovableSubarrayCount([8, 7, 6, 6])); //3
