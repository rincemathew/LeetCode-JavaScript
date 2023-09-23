// License Key Formatting

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    result = []
    j = 0
    for(i=s.length-1;i>=0;i--) {
        if(s[i] !== '-') {
            result.unshift(s[i].toUpperCase())
            j++
        }
        if(j === k) {
            result.unshift('-')
            j=0
        }
    }
    for(i=0;i<result.length;i++) {
        if(result[i] == '-') {
            result.shift()
            i--
        } else{
            break
        }
    }
    return result.join('')
};

console.log(licenseKeyFormatting("2-5g-3-J",2))  //"2-5G-3J"
console.log(licenseKeyFormatting("5F3Z-2e-9-w",4))  //"5F3Z-2E9W"
console.log(licenseKeyFormatting("--a-a-a-a--",2))  //"-AA-AA"