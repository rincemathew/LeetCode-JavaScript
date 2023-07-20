//Ransom note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split('')
    counter = 0
    for(i=0;i<ransomNote.length;i++) {
        checker = false
        for(j=0;j<magazine.length;j++) {
            if(ransomNote[i] === magazine[j]) {
                magazine[j] = true
                checker = true
                counter++
                break;
            }
        }
        if(checker==false) {
            return false
        }
    }
    return true
};

console.log(canConstruct('aa','aab'))