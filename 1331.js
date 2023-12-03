// Rank Transform of an Array

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    result = [];
    index = 1
    let newArr = [...arr]
    newArr.sort((a,b)=>a-b)
    let rank = new Map()
    for(i of newArr) {
        if(!rank.has(i)) {
            rank.set(i,index)
            index++
        }
    }
    console.log(rank)
    for(j of arr) {
        result.push(rank.get(j))
    }
    return result
};

console.log(arrayRankTransform([40, 10, 20, 30]));