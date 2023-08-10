// Self Dividing Numbers

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    result = []
    for(i=left;i<=right;i++) {
        spli = String(i).split('')
        bool = true
        for(j=0;j<spli.length;j++) {
            if(i % Number(spli[j]) !== 0) {
                bool = false
                break;
            }
        }
        if(bool) {
            result.push(i)
        }
    }
    return result
};

console.log(selfDividingNumbers(47,85))