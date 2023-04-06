// Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let value = 0;
    for(i=0;i<accounts.length;i++) {
        let sum=0;
        let account = accounts[i]
        for(j=0;j<account.length;j++) {
            sum = sum + account[j]
        }
        if(value<sum) {
            value = sum
        }
    }
    return value;
};


console.log(maximumWealth([[1,2,3],[3,2,1]]))
console.log(maximumWealth([[1,5],[7,3],[3,5]]))