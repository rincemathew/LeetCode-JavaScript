// Shuffle the Array

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */


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

// result
console.log(shuffle([2,5,1,3,4,7], 3))