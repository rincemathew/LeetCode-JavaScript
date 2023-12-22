// Maximum Score After Splitting a String

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zeros = 0
    let max = 0
    let ones = s.split('').filter((one)=>{return one === '1'}).length
    for(i=0;i<s.length-1;i++) {
        s[i] === '0'?zeros++:ones--
        max = Math.max(max, zeros+ones)
    }
    return max
};

console.log(maxScore("011101"));
console.log(maxScore("1111"));