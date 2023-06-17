// Positions of Large Groups

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    arr = []
    local = ''
    counter = 1
    start = 0
    end = 0
    for(i=0;i<s.length;i++) {
        if(s[i] === local) {
            counter++
            
        } else {
            local = s[i]
            end = i-1
            if(counter >= 3) {
                arr.push([start,end])
            }
            start = i
            counter = 1
        }

    }
    return arr
};

console.log(largeGroupPositions("abbxxxxzzy"))