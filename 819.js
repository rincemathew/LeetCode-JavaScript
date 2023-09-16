// Most Common Word

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let result = ""
    let count = 0
    bann = new Set(banned)
    map = {}
    paragraph = paragraph.toLowerCase().split(/\W+/);
    for(i=0;i<paragraph.length;i++) {
        if(!bann.has(paragraph[i])) {
            if(map[paragraph[i]] == null) map[paragraph[i]] = 0
             map[paragraph[i]]++
        }
    }
    for(val in map) {
        if(count < map[val] && val != '') {
            count = map[val]
            result = val
        }
    }
    return result
};


console.log(mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))