// Maximum Number of Words Found in Sentences

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let sentence_length = 0
    for(i=0; i<sentences.length; i++) {
        let array = sentences[i]
        let sente = array.split(" ")
        let leng = sente.length
        if(leng > sentence_length) {
            sentence_length = leng
        }
    }
    return sentence_length
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))