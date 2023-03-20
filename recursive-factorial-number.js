// problem give an integer 'n', find the factorial of that integer
// the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.
// factorial of 0 is 1

function resursiveFactorial(n) {
    if(n === 0) {
        return 1
    }
    return n * resursiveFactorial(n-1)
}

console.log(resursiveFactorial(0))
console.log(resursiveFactorial(1))
console.log(resursiveFactorial(5))

// big-o O(n)