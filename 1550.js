// Three Consecutive Odds

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    count = 0
    for(i=0;i<arr.length;i++) {
        if(arr[i]%2!=0) {
            count++
        } else {
            count = 0
        }
        if(count == 3) {
            return true
        }
    }
    return false
};