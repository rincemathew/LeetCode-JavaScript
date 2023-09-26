// Robot Return to Origin

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let r = 0, l = 0, u = 0, d = 0;
    for(i=0;i<moves.length;i++) {
        if(moves[i] === 'R') {
            r++
        }
        if(moves[i] === 'L') {
            l++
        }
        if(moves[i] === 'U') {
            u++
        }
        if(moves[i] === 'D') {
            d++
        }
    }
    if(r === l && u === d) {
        return true
    }
    return false
};

console.log(judgeCircle("UD"))