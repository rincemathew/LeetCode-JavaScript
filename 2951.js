// Find the Peaks

/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let result = []
    for(i=1;i<mountain.length-1;i++) {
        if(mountain[i-1] < mountain[i] && mountain[i+1] < mountain[i]) {
            result.push(i)
        }
    }
    return result
};
console.log(findPeaks([1, 4, 3, 8, 5])); //[1,3]