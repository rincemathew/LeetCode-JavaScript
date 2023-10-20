// Maximusm Repeating Substring

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let str = word;

    for (let i = 1; ; i++) {
      if (!sequence.includes(str)) {
        return i - 1;
      }

      str += word;
    }
    // let regex = new RegExp(word, 'g');
    // let match = sequence.match(regex);
    // if(match) {
    //     return match.length
    // } else {
    //     return 0
    // }
};

console.log(maxRepeating("ababc", "ab"))