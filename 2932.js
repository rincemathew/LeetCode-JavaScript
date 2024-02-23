// Maximum Strong Pair XOR I

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    let res = 0

        for(let x of nums){
            for(let y of nums){

                if(Math.abs(x-y) <= Math.min(x,y)){
                    res = Math.max(res,x ^ y)
                }

            }
        }
    
    return res
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));