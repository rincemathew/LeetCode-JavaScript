// Count Tested Devices After Test Operations

/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let testedDevice = 0

    for(let i=0;i<batteryPercentages.length;i++) {
        if((batteryPercentages[i]-testedDevice) > 0) {
            testedDevice++
        }
    }
    return testedDevice
};

console.log(countTestedDevices([1, 1, 2, 1, 3]));