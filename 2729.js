// Check if The Number is Fascinating
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let temp = String(n)+String(n*2)+String(n*3)
    if(temp.length<9 || temp.length>9) {
        return false
    }
    let set = new Set(temp)
    console.log(set)
    if(!set.has('0') && set.size === temp.length) {
        return true
    }
    return false
};


console.log(isFascinating(267))