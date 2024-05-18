// Make a Square with the Same Color

var canMakeSquare = function(grid) {
     for (let i = 0; i < grid.length-1; i++) {
       for (let j = 0; j < grid[i].length-1; j++) {
        let arr = [];
        // console.log(grid[i][j], grid[i][j + 1], grid[i + 1][j],grid[i+1][j+1]);
        if(grid[i][j] === "B") {   arr.push("B")}
        if(grid[i][j+1] === "B") {   arr.push("B")}
        if(grid[i+1][j] === "B") {   arr.push("B")}
        if(grid[i+1][j+1] === "B") {   arr.push("B")}
        // console.log(arr);
           if(arr.length === 0 || arr.length === 1 || arr.length === 3 || arr.length === 4) {
        return true
       }
       }
       
    
     }
    return false
};

console.log(canMakeSquare([["B","W","B"],["B","W","W"],["B","W","B"]])) //true
console.log(canMakeSquare([["B","W","B"],["W","B","W"],["B","W","B"]])); //false
console.log(canMakeSquare([["B","W","B"],["B","W","W"],["B","W","W"]])); //true