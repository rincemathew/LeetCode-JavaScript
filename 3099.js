// Harshad Number

let div = String(x).split("");
let harshad = 0;
for (i = 0; i < div.length; i++) {
  harshad += Number(div[i]);
}
console.log(harshad);
if (x % harshad === 0) {
  return harshad;
}
return -1;