// Sort Array By Parity II

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    result = []
    even = 0
    odd = 1
    for(num of nums) {
        if(num%2 === 0) {
            result[even] = num
            even += 2
        } else {
            result[odd] = num
            odd += 2
        }
    }
    return result
};

console.log(sortArrayByParityII([4, 2, 5, 7]));