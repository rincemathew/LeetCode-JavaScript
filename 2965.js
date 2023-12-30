// Find Missing and Repeated Values

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let result = 0
    const len = grid.length * grid.length;
    const duplicate = new Set()
    const set = new Set([...Array(len).keys()].map((num) => num + 1));
    console.log(len)
    for(i=0;i<grid.length;i++) {
        for(j=0;j<grid[i].length;j++) {
            if (duplicate.has(grid[i][j])) {
              result = grid[i][j];
            }
            if(set.has(grid[i][j])){
                set.delete(grid[i][j])
            }
            duplicate.add(grid[i][j]);
        }
    }
    return [result,...set]
};

console.log(findMissingAndRepeatedValues([[1,5,2],[8,4,3],[7,8,6]]))
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))