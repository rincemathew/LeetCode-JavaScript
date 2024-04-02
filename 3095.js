
//  Shortest Subarray With OR at Least K I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function(nums, k) {
    // set min to maximum number
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // initialize res variable for current subarray
        let res = nums[i];
        for (let j = i; j < nums.length; j++) {
            // calculate bitwise result
            res |= nums[j];

            // if res is more or equall to k, calculate the size of the subarray
            if (res >= k && min > j - i + 1) {
                min = j - i + 1;
            }
        }
    }

    // if we didn't find the answer, return -1
    return min === Infinity ? -1 : min;
};