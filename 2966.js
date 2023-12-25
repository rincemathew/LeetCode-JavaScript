// Divide Array Into Arrays With Max Difference

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    let result = []
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i += 3) {
      result.push(nums.slice(i, i + 3));
    }
    for(i=0;i<result.length;i++) {
        if ((result[i][2] - result[i][1])>k || (result[i][2] - result[i][0])>k || (result[i][1] - result[i][0])>k) {
          return [];
        }
    }
    return result
};

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
console.log(divideArray([1, 3, 3, 2, 7, 3], 3));