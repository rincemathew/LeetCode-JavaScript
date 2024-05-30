// H - Index;

var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  for (; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }
  return i;
};
