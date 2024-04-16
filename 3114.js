
// Latest Time You Can Obtain After Replacing Characters

s = s.split("");

if (s[0] == "?") {
  s[0] = s[1] >= 2 ? "0" : "1";
}

if (s[1] == "?") {
  s[1] = s[0] == 1 ? "1" : "9";
}

if (s[3] == "?") {
  s[3] = "5";
}

if (s[4] == "?") {
  s[4] = "9";
}

return s.join("");