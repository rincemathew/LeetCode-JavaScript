// Maximum Value of an Ordered Triplet I
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    maxValue = 0
    for(i=0;i<nums.length-2;i++) {
        for(j=i+1;j<nums.length-1;j++) {
            for(k=j+1;k<nums.length;k++) {
                if(nums[i] < nums[j] < nums[k]) {
                    maxValue = Math.max(maxValue,(nums[i]-nums[j])*nums[k])
                }
            }
        }
    }
    return maxValue
};

console.log(maximumTripletValue([12, 6, 1, 2, 7]));