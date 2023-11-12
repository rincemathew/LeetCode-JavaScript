// The kth Factor of n

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    for(i=1;i<=n;i++) {
        if(n%i===0) {
            k--
        }
        if(k===0) {
            return i
        }
    }
    return -1
};

console.log(kthFactor(12,3))  //3
console.log(kthFactor(7,2));  //7
console.log(kthFactor(4,4));  //-1