// Count Elements With Maximum Frequency

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let frequency = {};
  let maxFrequency = 0;
  let count = 0;

  for (let num of nums) {
    if (!frequency[num]) {
      frequency[num] = 0;
    }
    frequency[num]++;

    maxFrequency = Math.max(maxFrequency, frequency[num]);
  }

  for (let num in frequency) {
    if (frequency[num] === maxFrequency) {
      count += frequency[num];
    }
  }

  return count;
};
