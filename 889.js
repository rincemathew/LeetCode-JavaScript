// Uncommon Words from Two Sentences

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(' ')
    s2 = [...s1,...s2.split(' ')]
    result = []
    for(i=0;i<s2.length-1;i++) {
        bool = true
        for(j=i+1;j<s2.length;j++) {
            if(s2[i] == s2[j]) {
                bool = false
                s2[j] = -1
            }
        }
        if(bool === false) {
            s2[i] = -1
        }
    }
    for(i=0;i<s2.length;i++) {
        if(s2[i] !== -1) {
            result.push(s2[i])
        }
    }
    return result
};

// console.log(uncommonFromSentences("this apple is sweet","this apple is sour"))
console.log(uncommonFromSentences("abcd def abcd xyz","ijk def ijk"))