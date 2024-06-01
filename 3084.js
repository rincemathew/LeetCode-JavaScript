

var countSubstrings = function (s, c) {
  counter = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === c) {
      counter++;
    }
  }
  return counter + (counter * (counter - 1)) / 2;
};