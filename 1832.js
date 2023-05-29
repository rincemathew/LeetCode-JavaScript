// Check if the Sentence Is Pangram


/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alph = ['t','h','e','q','u','i','c','k','b','r','o','w','n','f','x','j','m','p','s','v','l','a','z','y','d','g']
    const set1 = new Set(sentence)
    if(set1.size != 26) {
        return false
    }
    for(i=0;i<alph.length;i++) {
        if(!set1.has(alph[i])) {
            return false
        }
    }
    return true
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))