// Smallest Missing Integer Greater Than Sequential Prefix Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0]
    for(i=1;i<nums.length;i++) {
        if (nums[i] === nums[i - 1] + 1) {
          sum += nums[i];
        } else {
            break
        }
    }
    const map =new Set(nums)
    while(map.has(sum)){
        sum++
    }
    return sum
};

console.log(missingInteger([1, 2, 3, 2, 5]));  //6
console.log(missingInteger([3, 4, 5, 1, 12, 14, 13])); //15
