// Count the Number of Vowel Strings in Range

let set = new Set(["a", "e", "i", "o", "u"]);
let vowels = 0;
for (let i = left; i <= right; i++) {
  if (set.has(words[i][0]) && set.has(words[i][words[i].length - 1])) {
    vowels++;
  }
}
return vowels;