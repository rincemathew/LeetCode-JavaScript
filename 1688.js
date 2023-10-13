// Count of Matches in Tournament

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    counter = 0
    while(n != 1) {
        counter = counter + Math.floor(n/2)
        n = Math.ceil(n/2) 
    }
    return counter

    // if (n === 1) {
    //     return 0; // No matches needed when there's only one team.
    // }

    // if (n % 2 === 0) {
    //     // If the number of teams is even, half of them advance, and the other half play matches.
    //     return n / 2 + numberOfMatches(n / 2);
    // } else {
    //     // If the number of teams is odd, one team gets a bye, and the rest play matches.
    //     return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
    // }
};

console.log(numberOfMatches(7))