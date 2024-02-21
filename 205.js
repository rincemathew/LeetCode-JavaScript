// Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;
    let sArray = [];
    let tArray = [];
    for (let i = 0; i < s.length; i++) {
      sArray.push(s.indexOf(s[i]));
      tArray.push(t.indexOf(t[i])); 
      if (sArray[i] != tArray[i]) return false;
    }
    return true;
};

console.log(isIsomorphic("egg","add"))
console.log(isIsomorphic("foo","bar"))