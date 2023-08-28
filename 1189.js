// Maximum Number of Balloons

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {b:0,a:0,l:0,o:0,n:0}

    for(value of text) {
        map[value]++
    }
    return Math.floor(Math.min(map.b,map.a,map.l/2,map.o/2,map.n))
};

console.log(maxNumberOfBalloons("loonbalxballpoon"))  //2