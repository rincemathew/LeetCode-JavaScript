// Maximum Units on a Truck

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1])
    totalBoxes = 0
    i = 0
    while(truckSize > 0) {
        if(i >= boxTypes.length) {
            break;
        }
        if(boxTypes[i][0] <= truckSize) {
            truckSize = truckSize - boxTypes[i][0];
            totalBoxes = totalBoxes + (boxTypes[i][0] * boxTypes[i][1]);
        } else {
            totalBoxes = totalBoxes + (truckSize * boxTypes[i][1]);
            truckSize = truckSize - boxTypes[i][0];
        }
        i++
    }
    return totalBoxes
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4)) //8
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))  //91
// console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))  