// Destination City
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    destination = paths[0][1]
    for(let i=1;i<paths.length;i++) {
        if(paths[i][0] === destination) {
            destination = paths[i][1]
            i = 0
        }
    }
    return destination
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
console.log(destCity([["B","C"],["D","B"],["C","A"]]));