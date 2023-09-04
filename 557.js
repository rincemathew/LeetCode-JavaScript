// Reverse Words in a String III

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // return s.split(' ').reverse().join('')

    return s.split(' ').map((word)=>{
        return word.split('').reverse().join('')
    }).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))  //"s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("God Ding"))