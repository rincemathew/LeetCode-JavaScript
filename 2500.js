// Delete Greatest Value in Each Row



// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.
/**
 * @param {number[][]} grid
 * @return {number}
 */

var deleteGreatestValue = function (grid) {
  var total = 0;
  while (grid[0].length != 0) {
    var check = 0;

    for (var i = 0; i < grid.length; i++) {
      var grids = grid[i];
      var checkStatus = 0;
      var index = 0
      for (var j = 0; j < grids.length; j++) {
        if (checkStatus < grids[j]) {
          checkStatus = grids[j];
          index = j
        }
        if(check< grids[j]) {
          check = grids[j]
        }
      }
      grids.splice(index, 1);
    }
    total += check
  }
  return total
};

//result
console.log(deleteGreatestValue([[1, 2, 4],[3, 3, 1],]));
console.log(deleteGreatestValue([[10]]));

