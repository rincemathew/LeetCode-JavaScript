// Find the Sum of Encrypted Integers

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    let sum = 0
    for(i=0;i<nums.length;i++) {
        let temp = String(nums[i]).split('').map(Number)
        let max = Math.max(...temp)
        let to = ''
        for(j=0;j<temp.length;j++) {
            to+= String(max)
        }
        sum += Number(to)
        // console.log(to)
    }
    return sum
};

console.log(sumOfEncryptedInt([10, 21, 31]));