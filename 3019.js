// Number of Changing Keys

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let change = 0
    for(i=1;i<s.length;i++) {
        if(s[i].toLowerCase() !== s[i-1].toLowerCase()) {
            change++
        }
    }
    return change
};