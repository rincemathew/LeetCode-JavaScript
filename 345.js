// Reverse Vowels of a String

var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let str = s.split('')

    let i =0
    let j = str.length;

    while(i < j) {
        if (vowels.has(str[i]) && vowels.has(str[j])) {
            [str[i],str[j]] = [str[j],str[i]]
            i++
            j--
        } else if (vowels.has(str[i])) {
            j--
        } else {
            i++
        }
    }
    return str.join('')
};

console.log(reverseVowels("leetcode"));  //"leotcede"