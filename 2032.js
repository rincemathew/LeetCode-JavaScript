// Two Out of Three

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let answer = new Set()
    const num1 = new Set(nums1);
    const num2 = new Set(nums2);
    const num3 = new Set(nums3);
    
    num2.forEach((value) => num1.has(value)&& answer.add(value));
    num3.forEach((value) => num1.has(value) && answer.add(value));
    num3.forEach((value) => num2.has(value) && answer.add(value));
    return [...answer]
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));