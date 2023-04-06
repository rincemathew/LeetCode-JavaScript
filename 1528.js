// Shuffle String

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = ''
    for(i=0;i<indices.length;i++) {
        for(j=0;j<s.length;j++) {
            if(i == indices[j]){
                result += s[j]
                break;
            }
        }
    }
    return result
};

//result
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))
console.log(restoreString("abc",[0,1,2]))