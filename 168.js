
//  Excel Sheet Column Title

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = "";

  while (columnNumber > 0) {
    let code = --columnNumber % 26;
    ans = String.fromCharCode(code + 65) + ans;
    columnNumber = (columnNumber - code) / 26;
  }

  return ans;
};
