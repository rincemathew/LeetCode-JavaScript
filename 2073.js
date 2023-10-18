// Time Needed to Buy Tickets

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    result = 0
    const kvalue = tickets[k]
    for(i=0;i<tickets.length;i++) {
        if(kvalue <= tickets[i] && i <= k) {
            result += kvalue
            }
        else if(kvalue <= tickets[i] && i >= k) {
            result += kvalue-1
        } else {
            result += tickets[i]
        }
    }
    return result
};

console.log(timeRequiredToBuy([2,3,2], 2))  //6
console.log(timeRequiredToBuy([5,1,1,1], 0))  //8