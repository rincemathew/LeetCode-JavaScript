// Number of Employees Who Met the Target

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let metTarget = 0
    for(let hour of hours) {
        if(hour >= target) {
            metTarget++
            console.log(hour)
        }
    }
    return metTarget

    // let count = 0;
    // hours.map((hrs) => {
    //   if (hrs >= target) {
    //     count++;
    //   }
    // });
    // return count;
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([98], 5));