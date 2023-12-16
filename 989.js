// Add to Array-Form of Integer

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    return (BigInt(num.join("")) + BigInt(k)).toString().split("");  
};

console.log(addToArrayForm([1, 2, 0, 0], 34));