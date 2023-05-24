// Count Negative Numbers in a Sorted Matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    count = 0
    for(i=0;i<grid.length;i++) {
        grd = grid[i]
        for(j=grd.length-1;j>=0;j--) {
            if(grd[j]>=0) {
                break;
            }
            count++
        }
    }
    return count
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))  //8
console.log(countNegatives([[3,2],[1,0]]))  //0