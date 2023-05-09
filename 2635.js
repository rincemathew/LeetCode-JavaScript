// Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    newArr = []
    for(i=0;i<arr.length;i++) {
        newArr.push(fn(arr[i],i))
    }
    return newArr
};

console.log(map([1,2,3],function plusone(n) { return n + 1; }))
console.log(map([1,2,3],function plusI(n, i) { return n + i; }))
