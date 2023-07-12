// Greatest English Letter in Upper and Lower Case

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    greatest = ""
    for(i=0;i<s.length;i++) {
        for(j=0;j<s.length;j++) {
            if(s[i] != s[j] && s[i] == s[j].toUpperCase()) {
                if(greatest < s[i]) {
                    greatest = s[i]
                }
            }
        }
    }
    return greatest
};

console.log(greatestLetter("lEeTcOdE"))