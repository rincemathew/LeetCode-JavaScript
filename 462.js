


var minMoves2 = function (nums) {
  let total = 0;
  for (i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  median = Math.floor(total / nums.length);

  let result = 0;
  for (j = 0; j < nums.length; j++) {
    result = result + (Math.abs(median - nums[j]))
  }
  return result;
};

console.log(minMoves2([1, 2, 3]));  //2
console.log(minMoves2([1, 10, 2, 9]));  //16