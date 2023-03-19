// given a sorted array of 'n' elements and the a target element 't',find the index of 't' in the array.
// return -1 if the target elements is not found.


function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))

//big-o O(logn)