// Apple Redistribution into Boxes
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    
    minBox = 0
    temp =0
    let sum = apple.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    capacity = capacity.sort((a,b)=>b-a)
    
    for(i=0;i<capacity.length;i++) {
        temp += capacity[i]
        minBox++
        if(temp >= sum) {
            break
        }
    }
    return minBox
};

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]));