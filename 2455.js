// Average Value of Even Numbers That Are Divisible by Three

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    total = 0
    count = 0
    for(i=0;i<nums.length;i++) {
        if(nums[i]%3==0 && nums[i]%2==0) {
            total += nums[i]
            count++
        }
    }
    return Math.floor(total/count)
    // return count == 0 ? 0 :total/count
};

console.log(averageValue([1,3,6,10,12,15]))  //9
console.log(averageValue([1,2,4,7,10]))  //0