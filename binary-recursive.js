// given a sorted array of 'n' elements and the a target element 't',find the index of 't' in the array.
// return -1 if the target elements is not found.


function recursiveBinarySearch(arr, target, leftIndex=0, rightIndex=arr.length -1) {
    if(leftIndex>rightIndex) {
        return -1
    }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target == arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return recursiveBinarySearch(arr, target, leftIndex, middleIndex-1)
  } else {
    return recursiveBinarySearch(arr, target, middleIndex+1, rightIndex)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20))

//big-o O(logn)