// Find the XOR of Numbers Which Appear Twice

var duplicateNumbersXOR = function (nums) {
  let bitWise = 0;

  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        bitWise = bitWise ^ nums[i];
      }
    }
  }

  return bitWise;
};