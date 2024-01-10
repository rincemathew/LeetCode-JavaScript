// K Items With the Maximum Sum
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let result = 0;
  if (k <= numOnes + numZeros) {
     return Math.min(numOnes, k);
  } else {
    return -1 * (k - (numOnes + numZeros)) + (Math.min(numOnes,k));
  }
};


// console.log(kItemsWithMaximumSum(3,2,0,2))
// console.log(kItemsWithMaximumSum(3,2,0,4));
console.log(kItemsWithMaximumSum(6,6,6,13)); //5