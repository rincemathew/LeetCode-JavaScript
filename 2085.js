// Count Common Words With One Occurrence
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const map1 = new Map([])
    const map2 = new Map([]);
    for(i=0;i<words1.length;i++) {
        if(map1.has(words1[i])) {
            map1.set(words1[i],map1.get(words1[i])+1)
        } else {
            map1.set(words1[i],1)
        }
    }
    for(i=0;i<words2.length;i++) {
        if(map2.has(words2[i])) {
            map2.set(words2[i],map2.get(words2[i]) -1)
        } else {
            map2.set(words2[i], 1);
        }
    }
    let count = 0
    for(const word of words1) {
        if (map1.get(word) === 1 && map2.get(word) === 1) count++;
    }
    return count
};

console.log(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]));