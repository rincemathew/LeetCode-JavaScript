// Find the Difference of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    sum = []
    let numsOne = new Set(nums1)
    let numsTwo = new Set(nums2)
    
    for(i=0;i<nums1.length;i++) {
        for(j=0;j<nums2.length;j++) {
            if(nums1[i] === nums2[j]) {
                numsOne.delete(nums1[i])
                numsTwo.delete(nums1[i])
            }
        }

    }
    sum = [[...numsOne],[...numsTwo]]
    return sum
};


console.log(findDifference([1,2,3],[2,4,6]))
console.log(findDifference([1,2,3,3],[1,1,2,2]))