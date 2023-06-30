// Can Make Arithmetic Progression From Sequence

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    leng = arr[1] - arr[0]
    for(i=1;i<arr.length-1;i++) {
        if(arr[i+1] - arr[i] !== leng) {
            return false
        }
    }
    return true
};

// console.log(canMakeArithmeticProgression([3,5,1]))
console.log(canMakeArithmeticProgression([1,2,4]))