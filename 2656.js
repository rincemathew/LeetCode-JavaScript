//  Maximum Sum With Exactly K Elements 


var maximizeSum = function (nums, k) {
  nums = nums.sort((a, b) => {
    return b - a;
  });
  let maxSum = 0
  let max = nums[0]

  for(i=0;i<k;i++) {
    maxSum += max
    max += 1
  }
  return maxSum
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));