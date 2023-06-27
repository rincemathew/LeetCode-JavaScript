// Mean of Array After Removing Some Elements

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b)
    let total = 0
    fivePercentage = (5/100)*arr.length
    for(i=fivePercentage;i<arr.length-fivePercentage;i++) {
        total = total + arr[i]
    }
    return total/(arr.length-(fivePercentage*2))
};

console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])) // 4.0000