// Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    value = ''
    for(i=0;i<address.length;i++) {
        if(address[i] == '.') {
            value += '[.]'
        } else {
            value += address[i]
        }
    }
    return value
};


console.log(defangIPaddr("1.1.1.1"))
console.log(defangIPaddr("255.100.50.0"))
