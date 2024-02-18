// Make Three Strings Equal
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    let i=0;
    for(i=0;i<s1.length;i++) {
        if(s1[i] !== s2[i]) break;
        if(s1[i] !== s3[i]) break;
    }

    if(i <=1) return -1;

    return s1.length - i + (s2.length - i) +(s3.length - i);

};

console.log(findMinimumOperations("abc", "abb", "ab"));