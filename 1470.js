// Shuffle the Array

var shuffle = function(nums, n) {
    result = []
    firstArray = nums.slice(0,n)
    secondArray = nums.slice(n,n+n)
    for(i=0;i<n;i++){
        result.push(firstArray[i])
        result.push(secondArray[i])
    }
    return result
};