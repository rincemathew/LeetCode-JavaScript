// Baseball Game
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    total = 0
    arr = []
    for(i=0;i<operations.length;i++) {
        temp = 0
        if(operations[i] === 'C') {
                arr.pop()
                // console.log(arr)
        } else if(operations[i] == 'D') {
            arr.push(arr[arr.length-1] * 2)
            // console.log(arr)
        } else if(operations[i] == '+') {
            arr.push(parseInt(arr[arr.length-1]) + parseInt(arr[arr.length-2]))
            // console.log(arr)
        } else {
            arr.push(parseInt(operations[i]))
            // console.log(arr)
        }
    }

    for(i=0;i<arr.length;i++) {
        total += arr[i]
    }
    return total
};

console.log(calPoints(["5","2","C","D","+"])) //30