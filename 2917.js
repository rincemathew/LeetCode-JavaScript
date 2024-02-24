// Find the K-or of an Array

  let ret = 0;
  for (let i = 0; i < 32; i += 1) {
    let countSetNum = 0;
    for (let n = 0; n < nums.length; n++) {
      const curNum = nums[n];

      if (((2 ** i) & curNum) === 2 ** i) {
        countSetNum += 1;
      }
      if (countSetNum == k) {
        ret += 2 ** i;
        break;
      }
    }
  }
  return ret;
  