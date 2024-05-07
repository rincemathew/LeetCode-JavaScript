
// Minimize Maximum Pair Sum in Array


var minPairSum = function(nums) {
    let sum = 0
    nums.sort((a,b)=>{
        return a-b
    })
    let i =0
    let j = nums.length-1
    while(i<=j) {
        sum = Math.max(sum,(nums[i]+nums[j]))
        console.log(i,j)
        i++
        j--
    }
    return sum
};

// console.log(minPairSum([3, 5, 2, 3]));
console.log(minPairSum([3, 5, 4, 2, 4, 6]));