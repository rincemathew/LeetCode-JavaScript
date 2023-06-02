// Pass the Pillow

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    i=1
    f=1
    con = true
    while(i<=time) {
        if(f === 1) {
            con = true
        } 
        if(f === n) {
            con = false
        }
        if(con) {
            f++
        } else {
            f--
        }
        i++
    }
    return f
};

console.log(passThePillow(4,5))  //2
console.log(passThePillow(18,38))  //5