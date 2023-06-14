// Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    res = ""
    str = strs[0]
    if(strs.length<2) {
        return String(strs)
    }
    for(i=1;i<strs.length;i++) {
        som = ""
        for(j=0;j<strs[i].length;j++) {
            var pos = strs[i]
            if(str[j] == pos[j]) {
                som = som+str[j]
            } else {
                break;
            }
        }
        if(som == "") {
            return ""
        }
        if(res == "") {
            res = som
        }
        if(res.length > som.length) {
            res = som
        }
    }
    return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]))  //fl