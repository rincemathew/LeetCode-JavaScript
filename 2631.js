/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let output = {};
  this.forEach((ele) => {
    const key = fn(ele);
    if (key in output) {
      output[key].push(ele);
    } else {
      output[key] = [ele];
    }
  });
  return output;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
