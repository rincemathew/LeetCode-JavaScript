// Path Crossing


/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const set = new Set()
    let value = [0,0]
    let x=0,y=0
    set.add('0,0')


    for(i=0;i<path.length;i++) {
        if(path[i] === "N"){
            y = y + 1
            console.log(y)
        }
        if(path[i] === "E"){
            x = x + 1
        }
        if(path[i] === "S"){
            y = y - 1
        }
        if(path[i] === "W"){
            x = x - 1
        }
        value = [x,y]
        if(set.has(`${value[0]},${value[1]}`)) {
            return true
        }
        set.add(`${value[0]},${value[1]}`)
        console.log(set)
    }
    return false
};

console.log(isPathCrossing("NES"))
console.log(isPathCrossing("NESWW"))