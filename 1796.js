// Second Largest Digit in a String

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    // let arr = [];
    // for(let i = 0; i<s.length; i++) {
    //     if(!(isNaN(s[i]))) {
    //         arr.push(s[i]);
    //     }
    // }
    // arr.sort((a,b) => a-b);
    // console.log(arr)
    // for(let j = arr.length-1 ; j>=1; j--) {
    //     if(arr[j] != arr[j-1]) {
    //         return arr[j-1];
    //     }
    // }
    // return -1;
    let count,num1,count2 = -1
    for(i=0;i<s.length;i++){
        if(!isNaN(s[i])) {
            let num = parseInt(s[i])
            if(count == null || count < num){
                count = num
            }
        }
    }
    console.log(count)
    for(i=0;i<s.length;i++){
        if(!isNaN(s[i])) {
            if(num1 == null && s[i] != count) {
                num1 = count - s[i]
                count2 = s[i]
            } else if(num1 > count - s[i] && s[i] != count) {
                num1 = count - s[i]
                count2 = s[i]
            }
        }
        
    }
    return count2
};

console.log(secondHighest("dfa12321afd"))
console.log(secondHighest("abc1111"))
console.log(secondHighest("ck077")) //0