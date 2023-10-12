// Redistribute Characters to Make All Strings Equal

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const l = words.length
    const map = new Map()
    for(i=0;i<words.length;i++) {
        for(j=0;j<words[i].length;j++){
            if(map.has(words[i][j])) {
                map.set(words[i][j],parseInt(map.get(words[i][j]))+1)
            } else {
                map.set(words[i][j],1)
            }
        }
      }
      let bool = true
      map.forEach((value,key) => {
        if(value%l !== 0) {
            bool = false
        }
      })
      return bool
};

// console.log(makeEqual(["abc","aabc","bc"]))
console.log(makeEqual(["ab","a"]))