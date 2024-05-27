//  Special Array I

for (i = 1; i < nums.length; i++) {
  if (
    (nums[i] % 2 === 0 && nums[i - 1] % 2 === 0) ||
    (nums[i] % 2 !== 0 && nums[i - 1] % 2 !== 0)
  ) {
    return false;
  }
}
return true;