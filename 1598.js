// Crawler Log Folder

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    arr = []

    for(i=0;i<logs.length;i++) {
        if(logs[i] == '../') {
            arr.pop()
        } else if(logs[i] == './') {

        } else {
            arr.push(logs[i])
        }
    }
    return arr.length
};


console.log(minOperations(["d1/","d2/","../","d21/","./"]))