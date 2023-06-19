// Find the Highest Altitude

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    altitude = 0
    largestAlti = 0
    for(i=0;i<gain.length;i++) {
        altitude = altitude + gain[i]
        if(altitude > largestAlti) {
            largestAlti = altitude
        }
    }
    return largestAlti
};

console.log(largestAltitude([-5,1,5,0,-7]))  //1