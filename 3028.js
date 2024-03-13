// Ant on the Boundary
/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let counter = 0
    let count = 0
    nums.forEach((num)=>{
        counter = counter + num
        if(counter === 0) {
            count++
        }
    })
    return count
};

console.log(returnToBoundaryCount([2, 3, -5]));
console.log(returnToBoundaryCount([3, 2, -3, -4]));