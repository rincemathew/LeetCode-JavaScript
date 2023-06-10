// Buddy Strings

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    const sArr = []
    const goalArr = []
    if(s.length !== goal.length) {
        return false
    }
    for(i=0;i<s.length;i++) {
        if(s[i] != goal[i]) {
            sArr.push(s[i])
            goalArr.push(goal[i])
        }
        if(sArr.length > 2) {
            return false
        }
    }
    if(sArr.length) {
        return sArr[0] == goalArr[1] && sArr[1] == goalArr[0]
    } else {
        return s.length != [...new Set(s)].length;
    }
};

console.log(buddyStrings('ab','ba'))