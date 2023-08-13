// String Matching in an Array

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length)
    result = []
    for(i=0;i<words.length-1;i++) {
        for(j=i+1;j<words.length;j++) {
            if(words[j].includes(words[i])) {
                result.push(words[i])
                break
            }
        }
    }
    return result
};


console.log(stringMatching(["mass","as","hero","superhero"]))