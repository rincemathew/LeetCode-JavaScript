// Convert Integer to the Sum of Two No-Zero Integers


/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(i=n-1;i>0;i--) {
        // if(i%10!=0 && (n-i)%10!=0) {
        //     return [n-i,i]
        // }
        if(check(i) && check(n-i)) {
            return [n-i,i]
        }
    }
    function check(num) {
        num = String(num)
        for(j=0;j<num.length;j++) {
            if(num[j]==0) {
                return false
            }
        }
        return true
    }
};

console.log(getNoZeroIntegers(1010))