// Relative Sort Array

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arrOne = []
    arrTwo = []
    for(i=0;i<arr2.length;i++) {
        for(j=0;j<arr1.length;j++) {
            if(arr2[i] === arr1[j]) {
                arrOne.push(arr2[i])
                arr1[j]=true
            } 
        }
    }
    for(i=0;i<arr1.length;i++) {
        if(arr1[i]!==true) {
            arrTwo.push(arr1[i])
        }
    }
    return [...arrOne,...arrTwo.sort((a,b)=>a-b)]
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))  //[2,2,2,1,4,3,3,9,6,7,19]