// Lucky Numbers in a Matrix

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    result = []
    for(i=0;i<matrix.length;i++) {
        min = Math.min(...matrix[i])
        let f = matrix[i].indexOf(Math.min(...matrix[i]));
        boo = true
        for(j=0;j<matrix.length;j++) {
            if(min < matrix[j][f]) {
                boo = false
                break;
            }
        }
        if(boo) {
            result.push(min)
        }
    }
    return result
};


console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))  //[15]