/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const num = new Set(['1','2','3','4','5','6','7','8','9'])
    let result = new Set()
    let re = ''
    for(i=0;i<word.length;i++) {
        if(num.has(word[i])) {
            re = re + word[i]
        } else {
            if(re !== '') {
                result.add(re);
            }
            re = ''
        }
    }
    if (re !== "") {
      result.add(re);
    }
    return result.size
};

console.log(numDifferentIntegers("leet1234code234"));