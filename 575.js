// Distribute Candies

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

    const set = new Set(candyType)
    if(set.size > candyType.length/2) {
        return candyType.length/2
    } else {
        return set.size
    }
};

console.log(distributeCandies([1,1,2,2,3,3]))