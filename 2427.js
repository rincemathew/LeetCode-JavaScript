/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let leng = (a>b)?b:a
    let count=0
    for(i=1;i<=leng;i++) {
        if(a%i == 0 && b%i == 0) {
            count++
        }
    }
    return count
};

console.log(commonFactors(12,6))
// console.log(commonFactors(25,30))