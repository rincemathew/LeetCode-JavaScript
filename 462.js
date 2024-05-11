
// Minimum Moves to Equal Array Elements II

var minMoves2 = function (nums) {
  let sortedNum = nums.sort((a, b) => a - b);
  let median = sortedNum[Math.floor((0 + nums.length) / 2)];

  let result = 0;
  for (let j = 0; j < nums.length; j++) {
    result += Math.abs(median - nums[j]);
  }
  return result;
};

console.log(minMoves2([1, 2, 3]));  //2
console.log(minMoves2([1, 10, 2, 9]));  //16