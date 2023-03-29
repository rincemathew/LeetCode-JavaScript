//Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitStr = []
    // splitStr = s.split(/(\s+)/);
    splitStr = s.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );    
    lengthValue = splitStr[splitStr.length-1]
    return lengthValue.length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))