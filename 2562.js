// Find the Array Concatenation Value

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let total = 0
    while(nums.length !== 0) {
        let first = nums.shift()
        let last = ""
        if(nums.length !== 0){
            last = nums.pop()
        }
        console.log(first,last)
        total += Number(String(first) + String(last))
    }
    return total
};

console.log(findTheArrayConcVal([7, 52, 2, 4])); //596
console.log(findTheArrayConcVal([5, 14, 13, 8, 12])); //673