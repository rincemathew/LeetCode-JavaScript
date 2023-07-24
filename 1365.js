// How Many Numbers Are Smaller Than the Current Number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    arr = []
    for(i=0;i<nums.length;i++) {
        counter = 0
        for(j=0;j<nums.length;j++) {
            if(nums[i] > nums[j]) {
                counter++
            }
        }
        arr.push(counter)
    }
    return arr
};


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))