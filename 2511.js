// Maximum Enemy Forts That Can Be Captured

/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    pathS = null;
    maxpathC = 0;
    i = 0;
    while (i < forts.length) {
      if ((forts[i] === -1 || forts[i] === 1) && !pathS) {
        pathS = [i, forts[i]];
      }
      if (forts[i] === 0 && pathS) {
        pathC++;
      }
      if ((forts[i] === -1 || forts[i] === 1) && pathS) {
        if (forts[i] === pathS[1]) {
          pathS[0] = i;
          pathC = 0;
        } else {
          maxpathC = Math.max(maxpathC, pathC);
          pathS = [i, forts[i]];
          pathC = 0;
        }
      }
      i++;
    }
    return maxpathC;
    
};

console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])); //4
console.log(captureForts([0, 0, 1, -1])); //0