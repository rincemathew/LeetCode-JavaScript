// Sort Array By Parity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    result = []
    for(num of nums) {
        if(num%2==0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    return result
};

console.log(sortArrayByParity([3,1,2,4]))