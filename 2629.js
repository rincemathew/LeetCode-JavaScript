// Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

console.log(compose([x => x + 1, x => x * x, x => 2 * x],4)) //65
console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x],1)) //1000
console.log(compose([],42)) //65