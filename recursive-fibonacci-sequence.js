//give a number 'n',find the nth element of the fibonacci sequence
// in mathematics, the fibonacci sequence in which each number is the sum of the two preceding ones.
// (0,1,1,2,3,5,8....)


function recursiveFibonacci(n) {
    if(n <2) {
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))

//big O(2^n)