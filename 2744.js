// Find Maximum Number of String Pairs

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    counter = 0
    for(i=0;i<words.length-1;i++) {
        for(j=i+1;j<words.length;j++) {
            if(words[i] === words[j].split('').reverse().join('')) {
                counter++
            }
        }
    }
    return counter
};

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"])) //2