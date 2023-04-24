// Divide Array Into Equal Pairs

// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let temp = false
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] === true) {
                temp = true
                console.log(i,'1')
                break;
            }
            if(nums[i] === nums[j]) {
                nums[j] = true
                temp = true
                console.log(i,'2')
                break;
            } else {
                temp = false
                console.log(i,'3')
            }
        }
        if(temp === false) {
            return false
        }
    }
    return true
};

// console.log(divideArray([3,2,3,2,2,2]))  //true
// console.log(divideArray([1,2,3,4]))  //false
console.log(divideArray([1,2]))  //false
console.log(divideArray([1,1,2,1,2,3,3,500]))  //false