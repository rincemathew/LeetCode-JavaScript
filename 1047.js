// Remove All Adjacent Duplicates In String

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    arr = []
    for(i=0;i<s.length;i++) {
        if(arr[arr.length-1] == s[i]) {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
};

console.log(removeDuplicates("abbaca"))