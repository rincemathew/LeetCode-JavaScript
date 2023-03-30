// Sorting the Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array = s.split(" ")
    let array2 = []
    answer = ''
    for(i=0; i<array.length;i++) {
        temp = array[i].slice(-1)[0]
        array2[temp-1] = array[i].slice(-(array[i].length),-1)
        answer = array2.join(' ')
    }
    return answer
};

console.log(sortSentence("is2 sentence4 This1 a3"))