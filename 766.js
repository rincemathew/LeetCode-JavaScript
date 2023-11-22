// Toeplitz Matrix

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  result = true;
  for (i = 0; i < matrix.length - 1; i++) {
    for (j = 0; j < matrix[i].length-1; j++) {
        console.log(matrix[i][j], matrix[i + 1][j + 1]);
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return result;
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))