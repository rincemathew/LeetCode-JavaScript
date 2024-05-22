// Check if Grid Satisfies Conditions

var satisfiesConditions = function(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (i < grid.length - 1) if (grid[i][j] != grid[i + 1][j]) return false;
        if (j < grid[0].length - 1)
          if (grid[i][j] == grid[i][j + 1]) return false;
      }
    }
    return true
};

console.log(satisfiesConditions([[1,0,2],[1,0,2]]))  //true
console.log(satisfiesConditions([[1,1,1],[0,0,0]])); //false
console.log(satisfiesConditions([[1], [2], [3]]));  //false