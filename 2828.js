// Check if a String Is an Acronym of Words

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if(words.length !== s.length) {
        return false
    }
    for(i=0;i<words.length;i++) {
        if(words[i][0] !== s[i]) {
            return false
        }
    }
    return true
};

console.log(isAcronym(["alice","bob","charlie"],"abc"))