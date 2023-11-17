// Convert 1D Array Into 2D Array

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) {
      return [];
    }
    let j = 0;
    result = [];
    temp = [];
    lengthh = original.length;
    for (i = 0; i < lengthh; i++) {
      temp.push(original.shift());
      j++;
      if (j === n) {
        result.push(temp);
        temp = [];
        j = 0;
      }
    }
    return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));