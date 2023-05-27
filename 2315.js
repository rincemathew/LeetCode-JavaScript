// Count Asterisks

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    include = true
    count = 0
    for(i=0;i<s.length;i++) {
        if(s[i] == '|') {
            include = !include
        }
        if(include === true && s[i]=='*') {
            count++
        }
    }
    return count
};

console.log(countAsterisks("l|*e*et|c**o|*de|")) //2
console.log(countAsterisks("iamprogrammer")) //0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")) //5