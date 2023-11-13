// Sum of Digits of String After Convert

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sum = ""
    for(i=0;i<s.length;i++) {
        sum = sum + (s.charCodeAt(i)-96).toString()
    }
    while(k > 0) {
        total = 0
        for(i=0;i<sum.length;i++) {
            total += Number(sum[i])
        }
        sum = total.toString()
        k--
    }
    return sum
};

console.log(getLucky("leetcode", 2));