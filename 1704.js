// Determine if String Halves Are Alike

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    counter = 0
    const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    for(i=0;i<s.length;i++) {
        if(i<s.length/2) {
            if(set.has(s[i])) {
                counter++
            }
        } else {
            if (set.has(s[i])) {
              counter--;
            }
        }
    }
    if(counter===0) {
        return true
    } else {
        return false
    }
};

console.log(halvesAreAlike("book"));