// Cells in a Range on an Excel Sheet

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    result = []
    for(i=s.charCodeAt(0);i<=s.charCodeAt(3);i++) {
        for(j=s[1];j<=s[4];j++) {
            result.push(String.fromCharCode(i) + j)
        }
    }
    return result
};


console.log(cellsInRange("K1:L2"))