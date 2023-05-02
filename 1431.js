// Kids With the Greatest Number of Candies


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let cand = [...candies]
    candies.sort((a,b) => a - b)
    let bigest = candies[candies.length-1]
    console.log(cand)
    for(i=0;i<candies.length;i++) {
        if(cand[i]+extraCandies >= bigest) {
            cand[i] = true
        } else {
            cand[i] = false
        }
    }
    return cand
};

console.log(kidsWithCandies([2,3,5,1,3],3))  //[true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2],1))  //[true,false,false,false,false] 
console.log(kidsWithCandies([12,1,12],10))  //[true,false,true]