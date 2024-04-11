// Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  let left = 0,
    right = k - 1,
    sum = 0;
  for (let i = left; i <= right; i++) {
    sum += nums[i];
  }
  let temp = sum;
  while (right !== nums.length - 1) {
    temp = temp - nums[left++];
    temp = temp + nums[++right];
    if (temp > sum) sum = temp;
  }
  return sum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));