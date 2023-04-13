// Determine Color of a Chessboard Square
// You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let left = true
    let bottom = false
    let code = coordinates.charCodeAt(0)%8
    if(code%2 == 0) {
        bottom = true
    }
    if(coordinates[1]%2 == 0) {
        left = false
    }
    return bottom === left
};

console.log(squareIsWhite("a1"))  //false
console.log(squareIsWhite("h3"))  //true
console.log(squareIsWhite("c7")) //false