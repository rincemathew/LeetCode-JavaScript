// Excel Sheet Column Number

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let ans = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    ans *= 26;
    ans += columnTitle.charCodeAt(i) - 64;
  }
  return ans;
};
