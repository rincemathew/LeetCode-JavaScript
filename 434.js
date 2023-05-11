// Number of Segments in a String

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    count = 0
    s = s.split(' ')
    for(i=0;i<s.length;i++) {
        if(s[i] !== '') {
            count++
        }
    }
    return count
    
};

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("     "))
