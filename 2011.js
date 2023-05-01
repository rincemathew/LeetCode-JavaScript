// Final Value of Variable After Performing Operations

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    X = 0
    for(i=0;i<operations.length;i++) {
        if(operations[i] === "X++" || operations[i] === "++X"){
            X++
        } else{
            X--
        }
    }
    return X
};


console.log(finalValueAfterOperations(["--X","X++","X++"])) //1
console.log(finalValueAfterOperations(["++X","++X","X++"]))  //3
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))  //0