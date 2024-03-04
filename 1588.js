
// Sum of All Odd Length Subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let total = 0
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++) {
            if((j-i) % 2 ===0 ){
                for(k=i;k<=j;k++) {
                    total = total +arr[k]
                }
            }
            // for(k=i;k<=j;k++) {
            //     total = total + arr[k]
            //     console.log(arr[k])
            // }
        }
    }
    return total
};