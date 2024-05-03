// Remove All Occurrences of a Substring


/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    if(s.includes(part)) {
        let temp = s.indexOf(part)
        let endIndex = temp + part.length;
        s = s.slice(0, temp) + s.slice(endIndex);
        return removeOccurrences(s,part)
    } else {
        return s
    }
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));