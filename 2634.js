// Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    arra = []
    for(i=0;i<arr.length;i++) {
            ne = fn(arr[i],i)
            if(ne == true) {
                arra.push(arr[i])
            } else if(ne == false) {

            } else {
                arra.push(arr[i])
            }
        
    }
    return arra
    // var filteredArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //     if (fn(arr[i], i)) {
    //         filteredArr.push(arr[i]);
    //     }
    // }
    // return filteredArr;
};


console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }))  //[20,30]
console.log(filter([1,2,3],function firstIndex(n, i) { return i === 0; }))  //[1]
console.log(filter([-2,-1,0,1,2],function plusOne(n) { return n + 1 }))  //[-2,0,1,2]