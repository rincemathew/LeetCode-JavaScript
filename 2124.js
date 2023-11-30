// Check if All A's Appears Before All B's

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let isBthere = false;
  for (i = 0; i < s.length; i++) {
    console.log(s[i])
    if (s[i] === "b") {
      isBthere === true;
      console.log(isBthere);
    }
    if (isBthere && s[i] === "a") {
      return false;
    }
  }
  return true;
};

console.log(checkString("abab"));