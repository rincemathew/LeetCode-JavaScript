
// Maximum Odd Binary Number
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  res = s.split("").sort((a, b) => b - a);
  res.shift();
  res.push("1");
  return res.join("");
};

console.log(maximumOddBinaryNumber('010'))
