

// Sum of Values at Indices With K Set Bits
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      let binIndex = i.toString(2);
      console.log(binIndex)
      let count = 0;
      for (let j = 0; j < binIndex.length; j++) {
        if (binIndex[j] === "1") {
          count++;
        }
      }
      if (count === k) {
        sum = sum + nums[i];
      }
    }
    return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2],1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1],2));


