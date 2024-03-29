// Find All Duplicates in an Array

var findDuplicates = function (nums) {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i]) - 1;
    nums[n] *= -1;

    if (nums[n] > 0) {
      duplicates.push(Math.abs(nums[i]));
    }
  }

  return duplicates;
};


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));