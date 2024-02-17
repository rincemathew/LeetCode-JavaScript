// Distribute Candies Among Children I
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let count=0
    for(i=0;i<=limit;i++) {
        for(j=0;j<=limit;j++) {
            for(k=0;k<=limit;k++) {
                if(i+j+k === n) {
                    count++
                }
            }
        }
    }
    return count
};

console.log(distributeCandies(5,2)) //3
console.log(distributeCandies(3,3)) //10