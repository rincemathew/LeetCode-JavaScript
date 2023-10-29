// Sum of Unique Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const unique = new Set()
    const duplicate = new Set()
    total = 0

    for(i of nums) {
        if(duplicate.has(i)) {
            continue;
        }
        if(unique.has(i)) {
            duplicate.add(i)
            unique.delete(i)
            total -= i
        } else {
            unique.add(i)
            total += i
        }
    }
    return total
    
};

console.log(sumOfUnique([1, 2, 3, 2])); //4
console.log(sumOfUnique([1, 1, 1, 1, 1])); //0