/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function (words) {
  const arr = [],
    res = [];
  let count = -1;
  for (const str of words) {
    if (str !== "prev") {
      count = -1;
      arr.push(str);
    } else if (str === "prev") {
      count++;
      if (!arr[count]) res.push(-1);
      else res.push(arr[arr.length - 1 - count]);
    }
  }
  return res;
};
