// Third Maximum Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    first = nums[0]
    let second = -Infinity
    let third = -Infinity
    for(i=1;i<nums.length;i++) {
        if(first < nums[i]) {
            third = second
            second = first
            first = nums[i]
        } else if(second < nums[i] && first > nums[i]) {
            third = second
            second = nums[i]
        } else if(third < nums[i] && second > nums[i]) {
            third = nums[i]
        }

    }
    if(second === -Infinity || third === -Infinity) {
        return first
    } else {
        return third
    }
};


console.log(thirdMax([3,2,1]))  //1
console.log(thirdMax([1,2]))  //2
console.log(thirdMax([2,2,3,1]))  //1
console.log(thirdMax([1,-2147483648,2])) //-2147
console.log(thirdMax([5,2,2])) //5
