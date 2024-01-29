// Chunk Array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let i = 0
    let j = 0
    let result = []
    let temp = []
    while(i<arr.length) {
        temp.push(arr[i])
        i++
        j++
        if(j === size || i === arr.length) {
            result.push(temp)
            j = 0
            temp = []
        }
    }
    return result
};


console.log(chunk([1, 2, 3, 4, 5],1));
console.log(chunk([1, 9, 6, 3, 2],3));