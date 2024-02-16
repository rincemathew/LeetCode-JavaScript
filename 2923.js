// Find Champion I
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    champion = 0
    championTotal = 0

    for(i=0;i<grid.length;i++) {
        let temp = 0
        for(j=0;j<grid[i].length;j++) {
            // console.log(grid[i][j])
            if(grid[i][j] === 1) {
                temp++
            }
        }
        if(temp > championTotal) {
            championTotal = temp
            champion = i
        }
    }
    return champion
};

console.log(findChampion([[0,0,1],[1,0,1],[0,0,0]]))