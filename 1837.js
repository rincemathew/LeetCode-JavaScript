// Sum of Digits in Base K

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
//   result;
//   kvalue = 0;
//   anothervalue = 1;
//   for (i = 1; i <= n; i++) {
//     if (kvalue === k) {
//       kvalue = 0;
//       anothervalue++;
//     }
//     kvalue++;
//   }
//   return (anothervalue * k).toString().split('')
// total = (Math.floor(n / k) * 10 + (n % k)).toString().split("");
total = n.toString(k).split('')
return total.reduce((acc, current) => Number(acc) + Number(current), 0);
};


console.log(sumBase(34, 6));
console.log(sumBase(10, 10));