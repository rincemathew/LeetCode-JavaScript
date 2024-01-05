// Split With Minimum Sum

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    return (
      Number(String(num)
        .split("")
        .sort((a, b) => a - b)
        .reduce((acc, curr, index) => acc + (index % 2 === 0 ? curr : ""), "")) +
      Number(String(num)
        .split("")
        .sort((a, b) => a - b)
        .reduce((acc, curr, index) => acc + (index % 2 !== 0 ? curr : ""), ""))
    );
};

console.log(splitNum(4325))