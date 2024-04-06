
// Maximum Length Substring With Two Occurrences
/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    
    const seenInWindow = {};

    let left = 0;
    let right = 0;
    let result = 0;

    while (right < s.length) {
      const currentRight = s[right];

      if (seenInWindow[currentRight]) seenInWindow[currentRight]++;
      else seenInWindow[currentRight] = 1;

      while (seenInWindow[currentRight] > 2) {
        const current = s[left];
        seenInWindow[current]--;
        left++;
      }

      if (right - left + 1 >= result) result = right - left + 1;
      right++;
    }

    return result;
    
};

console.log(maximumLengthSubstring("bcbbbcba"));

// console.log(maximumLengthSubstring("aaaa"));