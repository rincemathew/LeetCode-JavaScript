// Height Checker

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    count = 0
    let nwArr = [...heights]
    heights.sort((a,b)=>a-b)
    for(i=0;i<heights.length;i++) {
        if(nwArr[i] != heights[i]) {
            count++
        }
    }
    return count
};

console.log(heightChecker([1,1,4,2,1,3]))  //3