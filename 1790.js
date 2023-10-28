// Check if One String Swap Can Make Strings Equal

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) {
        return true
    }
    changeWord = 0
    let wordOne;
    let wordOneFalse = true
    let wordTwoFalse = true
    let wordTwo;
    for(i=0;i<s2.length;i++) {
        if(s1[i] !== s2[i]) {
            changeWord++
        }
        if(changeWord === 1 && wordOneFalse === true) {
            wordOne = i
            wordOneFalse = false
        }
        if (changeWord === 2 && wordTwoFalse === true) {
          wordTwo = i;
          wordTwoFalse = false
        }
        if(changeWord > 2) {
            return false
        }
    }
    if(s2[wordOne] === s1[wordTwo] && s2[wordTwo] === s1[wordOne]){
        return true
    } else {
        return false
    }
};

console.log(areAlmostEqual("bank", "kanb"));