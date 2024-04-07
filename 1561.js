// Maximum Number of Coins You Can Get

var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let n = piles.length / 3;
  let res = 0;
  for (let i = n; i < piles.length; i += 2) {
    res += piles[i];
  }
  return res;
};
