// Longest Strictly Increasing or Strictly Decreasing Subarray

var longestMonotonicSubarray = function(nums) {

    let longest = 1
    let incresing = 1
    let decresing = 1

    for(i=1;i<nums.length;i++) {
        if(nums[i] < nums[i-1]) {
            decresing++
            longest = Math.max(longest,decresing)
        } else {
            decresing = 1
        }

        if(nums[i] > nums[i-1]) {
            incresing++
            longest = Math.max(longest, incresing);
        } else {
            incresing = 1
        }
    }

    return longest
    
};

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2]));