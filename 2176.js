// Count Equal and Divisible Pairs in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let counter = 0
    for(i=0;i<nums.length-1;i++) {
        for(j=i+1;j<nums.length;j++) {
            if(nums[i] == nums[j]) {
                if((i*j)%k==0) {
                    counter++
                }
            }
        }
    }
    return counter
};

console.log(countPairs([3,1,2,2,2,1,3],2))