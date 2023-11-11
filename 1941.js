// Check if All Characters Have Equal Number of Occurrences

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map([])
    for(i=0;i<s.length;i++) {
        if(map.has(s[i])) {
            map.set(s[i],map.get(s[i])+1)
        } else {
            map.set(s[i],1)
        }
    }
    console.log(map)
    let temp = 0
    let result = true
    map.forEach((value,key)=> {
        if(temp === 0) {
            temp = value
        }
        if(value !== temp) {
            result = false
        }
    })
    return result
};

// console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));