// Find Lucky Integer in an Array

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    total = -1
    for(i=0;i<arr.length;i++) {
        counter = 1
        for(j=i+1;j<arr.length;j++) {
            if(arr[i] === arr[j] && arr[i] !== true) {
                arr[j] = true
                counter++
            }
        }
        if(counter === arr[i] && counter > total) {
            total = counter
        }
    }
    return total
};


console.log(findLucky([2,2,3,4]))
console.log(findLucky([1,2,2,3,3,3]))
console.log(findLucky([2,2,2,3,3]))