// Minimum Sum of Four Digit Number After Splitting Digits

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    arr = num.toString().split('').sort()
    return parseInt(arr[0]+arr[2]) + parseInt(arr[1]+arr[3])
};

console.log(minimumSum(2932))