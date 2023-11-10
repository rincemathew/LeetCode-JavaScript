// Count Square Sum Triples

/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    result = 0
    for(i=1;i<=n;i++) {
        for(j=1;j<=n;j++) {
           temp = i ** 2 + j ** 2
           if (Math.sqrt(temp) <= n && Number.isInteger(Math.sqrt(temp))) {
             result++;
           }
        }
    }
    return result
};

console.log(countTriples(5))  //2