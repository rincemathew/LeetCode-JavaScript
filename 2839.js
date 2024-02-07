/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    const [a, b, c, d] = s1;
    if (
      s1 === s2 ||
      c + d + a + b === s2 ||
      a + d + c + b === s2 ||
      c + b + a + d === s2
    ) {
      return true;
    }
    return false;
};

console.log(canBeEqual("abcd", "cdab"));