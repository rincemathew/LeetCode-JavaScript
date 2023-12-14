// Gas Station

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0
    let balance = 0
    let total = 0
    for(i=0;i<gas.length;i++) {
        balance += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if(balance < 0) {
            start = i+1
            balance = 0
        }
        // console.log(balance)
    }
    return total > 0 ? start : -1

};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));