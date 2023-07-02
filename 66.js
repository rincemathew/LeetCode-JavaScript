// Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = '',final = []
    for(i=0;i<digits.length;i++) {
        str += digits[i]
    }
    console.log(str)
    str = BigInt(str) + BigInt(1)
    console.log(str)
    str = String(str)
    for(i=0;i<str.length;i++) {
        final[i] = BigInt(str[i])
    }
    return final
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))