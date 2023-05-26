// Kth Missing Positive Number

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 1
    let j = 0
    count = 0
    while(k!=count) {
        if(i == arr[j]) {
            j++
        } else {
            count++
        }
        i++
    }
    return i-1
};

console.log(findKthPositive([2,3,4,7,11],5))  //9
console.log(findKthPositive([1,2,3,4],2))  //6