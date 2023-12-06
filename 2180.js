/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let evenNumbers = 0
    for(i=2;i<=num;i++) {
        let sum = 0
        let temp = i
        while(temp>0) {
            sum += temp % 10;
            temp = Math.floor(temp/10)
        }
        if(sum %2===0) {
            evenNumbers++
        }
    }
    return evenNumbers
};

console.log(countEven(30))