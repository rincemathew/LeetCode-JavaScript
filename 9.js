// Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    reverse = ''
    x = String(x)
    console.log(x.length)
    for(i=x.length-1;i>=0;i--){
        reverse+=x[i]
    }
    if(x == reverse) {
        return true
    }else {
        return false
    }
    
};

console.log(isPalindrome(121))