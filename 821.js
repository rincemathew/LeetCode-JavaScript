// Shortest Distance to a Character

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    arr = []
    counter = Infinity
    for(i=0;i<s.length;i++) {
        if(s[i] == c) {
            counter = 0
        }
        arr[i] = counter
        counter++
    }


    counter = Infinity

    for(i=s.length-1;i>=0;i--) {
        if(s[i] == c) {
            counter = 0
        }
        if(arr[i] > counter) {
            arr[i] = counter
        }
        counter++
    }


    return arr
};

console.log(shortestToChar("loveleetcode","e")) // [3,2,1,0,1,0,0,1,2,2,1,0]