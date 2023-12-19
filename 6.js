// Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
      return s;
    }
    let zigzag = Array(numRows).fill('');
    let plus = true
    let temp = 0
    for(i=0;i<s.length;i++) {
        zigzag[temp] += s[i]

        if(plus) {
            temp++
        } else {
            temp--
        }

        if(temp === numRows-1) {
            plus = false
        } else if(temp === 0) {
            plus = true
        }
    }
    return zigzag.join('')
};

console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); //"PINALSIGYAHRPI"