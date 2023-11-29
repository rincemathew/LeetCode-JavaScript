// Guess Number Higher or Lower

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guess(mid) {
    let value = 6
    if(mid === value) {
        return 0
    } else if(mid > value) {
        return -1
    } else if(mid < value) {
        return 1
    }
}
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  debugger;
  let start = 0;
  let end = n;
  while (true) {
    let mid = Math.round((start + end) / 2);
    console.log(mid);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  
//   return start;
};
console.log(guessNumber(10))
