// Capitalize the Title.
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(' ')
    for(i=0;i<title.length;i++) {
        title[i] = title[i].toLowerCase()
        if(title[i].length > 2) {
            first = title[i].charAt(0).toUpperCase()
            remaining = title[i].slice(1)
            title[i] = first + remaining
        }
    }
    return title.join(' ')
};

console.log(capitalizeTitle("capiTalIze tHe titLe"))  //"Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word"))  //"First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode"))  //"i Love Leetcode"