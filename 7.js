// Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negative = false;
  if (x < 0) {
    negative = true;
  }
  x = Math.abs(x);
  let rev = String(x).split("").reverse().join("");

  if (rev >= Math.pow(-2, 31) && rev <= Math.pow(2, 31) - 1) {
    if (negative) {
      return Number(rev) * -1;
    }
    return Number(rev);
  } else {
    return 0;
  }
};
