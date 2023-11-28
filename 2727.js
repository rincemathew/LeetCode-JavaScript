// is object is empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (o in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty([null, false, 0]));