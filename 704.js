// Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lenS = 0
    let lenE = nums.length - 1

    while(lenS <= lenE) {
        midd = Math.floor((lenE + lenS)/2)

        if(target == nums[midd]) {
            return midd
        }

        if(target < nums[midd]) {
            lenE = midd - 1
        } else {
            lenS = midd + 1
        }

    }
    return -1
};

console.log(search([-1,0,3,5,9,12],9)) //4
console.log(search([-1,0,3,5,9,12],2)) //-1
console.log(search([5],5)) //0